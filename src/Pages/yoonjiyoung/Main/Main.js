import React from "react";
import Nav from "./Components/Nav/Nav";
import Feed from "./Components/Feeds/Feeds";
import MainRight from "./Components/MainRight/MainRight";
import MainStory from "./Components/Feeds/MainStory";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <section>
            <Feed>
              <MainStory />
            </Feed>
            <MainRight />
          </section>
        </main>
      </>
    );
  }
}

export default Main;
