import React from "react";
import { withRouter } from "react-router-dom";
import Story from "./Story";
import { randomData } from "../../../data";

class MainStory extends React.Component {
  constructor() {
    super();
    this.state = {
      modalStatus: false,
      story: randomData,
    };
  }

  showModal = () => {
    this.setState({ modalStatus: true });
  };

  hideModal = () => {
    this.setState({ modalStatus: false });
  };

  render() {
    return (
      <div className="main__top-story">
        {this.state.modalStatus && <Story hideModal={this.hideModal} />}
        {this.state.story.map((column, index) => {
          console.log(column, "column");
          return (
            <div className="story__column" key={column.id}>
              <div className="story__user">
                <div className="story__profile-border">
                  <img
                    onClick={this.showModal}
                    alt="story__profile"
                    className="story__profile-photo"
                    src={column.imageUrl}
                  />
                </div>
              </div>
              <div className="story__title">
                <span className="story__id">{this.state.story[index].id}</span>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(MainStory);
