import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Pages from "./Pages/Pages/Pages"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/Pages" component={Pages}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Home" component={Home}/>
          <Route path="/">
            <Redirect to="/Home"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
