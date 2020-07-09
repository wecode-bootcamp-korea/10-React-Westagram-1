import React from "react";

import Nav from "./Components/Nav/Nav";
import Feed from "./Components/Feeds/Feeds";
import MainRight from "./Components/MainRight/MainRight";

import "./Main.scss";
import "../../../Styles/common.scss";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <section>
            <Feed />
            <MainRight />
          </section>
        </main>
      </>
    );
  }
}

export default Main;
