import React from "react";
import FeedComponent from "./FeedComponent";
import MainStory from "./MainStory";

import "./Feeds.scss";

class Feed extends React.Component {
  render() {
    return (
      <div className="Main__feeds-wrap_JY">
        <MainStory />
        <FeedComponent
          userId="casa__shop"
          timeAgo="2시간전"
          location="Seoul,KR"
          likeId="samuel__smalls"
          content="Beautiful shell glass box, $40 + shipping. DM email and zip
          code to purchase."
          feedImg="/images/yoonjiyoung/profile16.jpg"
          likeProfile="/images/yoonjiyoung/profile4.jpg"
          userProfile="/images/yoonjiyoung/profile15.jpg"
        />
        <FeedComponent
          userId="yojuyoon"
          timeAgo="7시간전"
          location="London,UK"
          likeId="utrecht_nowidea"
          content="한국인의 버릇중에 하나가 자꾸 화이팅을 해요~ Hwaeeeeeting^^~"
          feedImg="/images/yoonjiyoung/profile4.jpg"
          likeProfile="/images/yoonjiyoung/profile10.jpg"
          userProfile="/images/yoonjiyoung/profile13.jpg"
        />
        <FeedComponent
          userId="regular.kr"
          timeAgo="19시간전"
          location="Seoul,KR"
          likeId="bmq_._._._"
          content="Arnold Circus Stoolのミニサイズ版・Arnoldino Stool、新色Pistachioなど入荷しました。"
          feedImg="/images/yoonjiyoung/profile14.jpg"
          likeProfile="/images/yoonjiyoung/profile10.jpg"
          userProfile="/images/yoonjiyoung/profile13.jpg"
        />
      </div>
    );
  }
}

export default Feed;
