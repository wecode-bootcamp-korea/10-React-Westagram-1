import React from "react";
import { withRouter } from "react-router-dom";
import { randomData } from "../../../data";
import Story from "./Story";

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
    const { hideModal, showModal } = this;
    const { modalStatus, story } = this.state;
    return (
      <div className="main__top-story">
        {modalStatus && <Story hideModal={hideModal} />}
        {story.map((column, index) => {
          return (
            <div className="story__column" key={column.id}>
              <div className="story__user">
                <div className="story__profile-border">
                  <img
                    onClick={showModal}
                    alt="story__profile"
                    className="story__profile-photo"
                    src={column.imageUrl}
                  />
                </div>
              </div>
              <div className="story__title">
                <span className="story__id">{story[index].id}</span>
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
