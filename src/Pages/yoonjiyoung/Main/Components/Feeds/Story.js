import React from "react";
import { randomData } from "../../../data";
import "./Story.scss";

class Story extends React.Component {
  render() {
    return (
      <div className="story__container" onClick={this.props.hideModal}>
        <div className="story__content-container">
          <div className="story__top">
            <div className="story__profile">
              <div className="story__profile-container">
                <img
                  className="story__profile-photo"
                  alt="story__profile"
                  src={randomData[0].imageUrl}
                ></img>
                <div className="story__profile-user">
                  <span className="story__profile-user-name">
                    {randomData[0].id}
                  </span>
                  <span className="story__time-ago">2시간 전</span>
                </div>
              </div>
            </div>
            <div className="story__icon">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="story__bar"></div>
          <div className="story__bar-flow"></div>
          <div className="story__content">
            <div className="story__image">
              <img
                className="story__image"
                alt="story__img"
                src={randomData[1].imageUrl}
              ></img>
              <input
                className="story__input"
                type="text"
                placeholder="Send Message"
              ></input>
              <div className="send__icon">
                <i className="fas fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
