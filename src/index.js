import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Game from "./components/Game/Game";
import Error from "./components/Error/Error";


const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Auth}/>
      <Route path="/game" component={Game}/>
      <Route component={Error}/>
    </Switch>
  </Router>
);



ReactDOM.render(<App/>,document.getElementById("root"));
