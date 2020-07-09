import React from "react";
// import "./App.scss"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from "./pages/byeongsoolee/login/Login";
import Main from "./pages/byeongsoolee/main/Main";

// import Nav from "./components/Nav/Nav"
// import Feeds from "./components/Feeds/Feeds"
// import MainRight from "./components/MainRight/MainRight"


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
           <Route exact path="/" component={Login} />
           <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes; 