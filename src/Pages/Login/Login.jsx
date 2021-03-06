import React, { useState } from "react";
import { fb } from "../../firebase";
import { Redirect } from "react-router";
import { useStoreActions } from "easy-peasy";

const Login = () => {
  const setUser = useStoreActions((actions) => actions.setUser);

  // Credentials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect
  const [redirect, setRedirect] = useState(undefined);

  const onSubmit = (e) => {
    e.preventDefault();
    fb.auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        setUser(user);
        setRedirect(true)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return redirect === true ? (
    <Redirect to="/"></Redirect>
  ) : (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="email">Email</label>
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          id="password"
        />
        <label htmlFor="password">Password</label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
