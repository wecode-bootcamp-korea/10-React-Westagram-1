import React from "react";
import Nav from "./components/nav/Nav"
import Feed from "./components/feeds/Feed";
import MainRight from "./components/mainRight/MainRight"
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
        <>
            <div>
                <Nav />
            </div>
            <div className ="mainContainer">
                <Feed />
                <MainRight />
            </div>
        </>
    );
  }
}

export default Main;  