import React, { useState } from "react";
import { Redirect } from "react-router";
import { fb } from "../../firebase";

const Register = () => {
  // Credentials
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect
  const [redirect, setRedirect] = useState(undefined);

  const onSubmit = (e) => {
    e.preventDefault();
    fb.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        setRedirect(true)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
      });
  };

  return redirect === true ? (
    <Redirect to="/"></Redirect>
  ) : (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="username"
          name="username"
          id="username"
        />
        <label htmlFor="username">Username</label>
        <br />
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

export default Register;
