import React from "react";
import "./Story.scss";

class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      storyData: [],
    };
  }

  componentDidMount() {
    this.getDatas();
  }

  getDatas = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          storyData: result,
        })
      );
  };

  render() {
    const { storyData } = this.state;
    return (
      <>
        <div className="feed-story">
          {storyData.map((result) => {
            return (
              <ul key={result.id}>
                <li className="story-list">
                  <div className="story-profile-img">
                    <img
                      alt="story"
                      src={`https://robohash.org/${result.id}?set=set2&size=180x180`}
                    />
                  </div>
                  <span className="story-profile-id">
                    {result.username.length >= 10
                      ? result.username.slice(0, 10) + "..."
                      : result.username}
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      </>
    );
  }
}

export default Story;
