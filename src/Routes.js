import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginShin from "./Pages/yeongjaeshin/Login/Login";
import MainShin from "./Pages/yeongjaeshin/Main/Main";
import LoginKim from "./Pages/hyosikkim/Login/Login";
import MainKim from "./Pages/hyosikkim/Main/Main";
import LoginKwon from "./Pages/hansungkwon/Login/Login";
import MainKwon from "./Pages/hansungkwon/Main/Main";
import LoginLee from "./pages/byeongsoolee/Login/Login";
import MainLee from "./pages/byeongsoolee/Main/Main";
import LoginYoon from "./Pages/yoonjiyoung/Login/Login";
import MainYoon from "./Pages/yoonjiyoung/Main/Main";

function Routes() {
  return (
    <Router>
      <Switch>
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
      </Switch>
    </Router>
  );
}

export default Routes;
