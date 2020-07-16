import React from "react";
import Nav from "../../yeongjaeshin/Main/Components/Nav/Nav";
import Story from "../Main/Components/Storys/Story";
import Feeds from "../Main/Components/Feeds/Feeds";
import Right from "./Components/Right/Right";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="Main_YJ">
          <main className="main-container">
            <Story />
            <Feeds />
          </main>
          <Right />
        </div>
      </>
    );
  }
}

export default Main;
