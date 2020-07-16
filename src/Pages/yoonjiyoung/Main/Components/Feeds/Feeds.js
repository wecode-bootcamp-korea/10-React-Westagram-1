import React from "react";
import FeedComponent from "./FeedComponent";
import MainStory from "./MainStory";
import { randomData } from "../../../data";
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
          feedImg={randomData[1].imageUrl}
          likeProfile={randomData[2].imageUrl}
          userProfile={randomData[3].imageUrl}
        />
        <FeedComponent
          userId="yojuyoon"
          timeAgo="7시간전"
          location="London,UK"
          likeId="utrecht_nowidea"
          content="한국인의 버릇중에 하나가 자꾸 화이팅을 해요~ Hwaeeeeeting^^~"
          feedImg={randomData[3].imageUrl}
          likeProfile={randomData[4].imageUrl}
          userProfile={randomData[5].imageUrl}
        />
        <FeedComponent
          userId="regular.kr"
          timeAgo="19시간전"
          location="Seoul,KR"
          likeId="bmq_._._._"
          content="Arnold Circus Stoolのミニサイズ版・Arnoldino Stool、新色Pistachioなど入荷しました。"
          feedImg={randomData[0].imageUrl}
          likeProfile={randomData[5].imageUrl}
          userProfile={randomData[3].imageUrl}
        />
      </div>
    );
  }
}

export default Feed;
