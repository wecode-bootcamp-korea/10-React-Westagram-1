import React, { Fragment } from "react";
import Nav from "./components/nav/Nav"
import Feed from "./components/feeds/Feed";
import MainRight from "./components/mainRight/MainRight"
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
        <Fragment>
            <div>
                <Nav />
            </div>
            <div className ="mainContainer">
                <Feed />
                <MainRight />
            </div>
        </Fragment>
    );
  }
}

export default Main;  