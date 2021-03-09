import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/">

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
