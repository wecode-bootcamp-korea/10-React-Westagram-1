import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import Story from "./Components/Feeds/Story";
import Feeds from "./Components/Feeds/Feeds";
import Side from "./Components/Side/Side";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main_Kwon">
        <Nav />
        <main className="feeds-container">
          <article className="arc-container">
            <Story />
            {Array(5)
              .fill()
              .map((_, i) => {
                return <Feeds key={i} />;
              })}
          </article>
          <Side />
        </main>
      </div>
    );
  }
}

export default Main;
