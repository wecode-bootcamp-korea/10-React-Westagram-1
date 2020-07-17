import React from "react";
import Nav from "../../yeongjaeshin/Main/Components/Nav/Nav";
import Story from "../Main/Components/Storys/Story";
import Feeds from "../Main/Components/Feeds/Feeds";
import Right from "./Components/Right/Right";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      datas: [],
      feedImgs: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getDatas();
    this.getFeedImgs();
  }

  getDatas = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          datas: result,
        });
      });
  };

  getFeedImgs = () => {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          feedImgs: result.data.movies,
          isLoading: false,
        });
      });
  };

  render() {
    const { datas, feedImgs, isLoading } = this.state;
    return (
      <>
        <Nav />
        <div className="Main_YJ">
          <main className="main-container">
            <Story storyData={datas} />
            <Feeds feedData={datas} feedImg={feedImgs} isLoading={isLoading} />
          </main>
          <Right recommendData={datas} />
        </div>
      </>
    );
  }
}

export default Main;
