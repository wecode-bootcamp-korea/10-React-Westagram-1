import React from "react";
import "./FeedImg.scss";

class FeedImg extends React.Component {
  render() {
    const { imgSrc } = this.props;
    return (
      <div className="img-box">
        <img alt="feed-img" src={imgSrc} />
      </div>
    );
  }
}

export default FeedImg;
