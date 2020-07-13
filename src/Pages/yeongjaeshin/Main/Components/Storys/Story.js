import React from "react";
import "./Story.scss";

class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      storyData: [
        { userid: "realisshoman", imgSrc: "http://bitly.kr/xcBDWWXv1hr" },
        { userid: "nasungcityboy", imgSrc: "http://bitly.kr/jgstnMkAhEf" },
        { userid: "thisloop", imgSrc: "http://bitly.kr/pALfma6bNV8" },
        { userid: "kimehwa", imgSrc: "http://bitly.kr/KU7jRuBbyxc" },
        { userid: "thequiett", imgSrc: "http://bitly.kr/6NxEpTSJAmP" },
        { userid: "nucksal", imgSrc: "http://bitly.kr/0kf7Gqta25e" },
        { userid: "deepflow39", imgSrc: "http://bitly.kr/mGNtqeNEcq" },
        { userid: "donmills1988", imgSrc: "http://bitly.kr/al02kpbMq5P" },
        { userid: "bigoneisthename", imgSrc: "http://bitly.kr/5bFiCwuIamn" },
        { userid: "thisisneverthat", imgSrc: "http://bitly.kr/YHjtuiHSOZM" },
        {
          userid: "lostmanagementcities",
          imgSrc: "http://bitly.kr/tTq5b0KwTMY",
        },
      ],
    };
  }

  render() {
    const { storyData } = this.state;
    return (
      <>
        <div className="feed-story">
          {storyData.map((item) => {
            return (
              <ul key={item.userid}>
                <li className="story-list">
                  <div className="story-profile-img">
                    <img alt="story" src={item.imgSrc} />
                  </div>
                  <span className="story-profile-id">
                    {item.userid.length >= 10
                      ? item.userid.slice(0, 10) + "..."
                      : item.userid}
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
