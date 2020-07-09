import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginKim from './Pages/hyosikkim/Login/Login';
import MainKim from './Pages/hyosikkim/Main/Main';
import LoginKwon from './Pages/hanseongkwon/Login/Login';
import MainKwon from './Pages/hanseongkwon/Main/Main';
import LoginByeongsoo from './Pages/byeongsoolee/Login/Login';
import MainByeongsoo from './Pages/byeongsoolee/Main/Main';
import LoginJiyoung from './Pages/jiyoungyoon/Login/Login';
import MainJiyoung from './Pages/jiyoungyoon/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Route exact path="/login-yeongjae" component={LoginShin} />
      <Route exact path="/main-yeongjae" component={MainShin} />
      <Route exact path="/login-hyosik" component={LoginKim} />
      <Route exact path="/main-hyosik" component={MainKim} />
      <Route exact path="/login-hansung" component={LoginKwon} />
      <Route exact path="/main-hansung" component={MainKwon} />
      <Route exact path="/login-byeongsoo" component={LoginLee} />
      <Route exact path="/main-byeongsoo" component={MainLee} />
      <Route exact path="/login-jiyoung" component={LoginYoon} />
      <Route exact path="/main-jiyoung" component={MainYoon} />
    );
  }
}

export default Routes;
