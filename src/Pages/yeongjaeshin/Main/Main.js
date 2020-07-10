import React from "react";
import Nav from "../../yeongjaeshin/Main/Components/Nav/Nav";
import Feeds from "../Main/Components/Feeds/Feeds";
import Right from "./Components/Right/Right";
import "./main.scss";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main className="Main_YJ">
          <Feeds />
          <Right />
        </main>
      </>
    );
  }
}

export default Main;
