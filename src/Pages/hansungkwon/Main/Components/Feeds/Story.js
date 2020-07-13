import React, { Component } from "react";
import "./Story.scss";

class Story extends Component {
  constructor() {
    super();
    this.state = {
      storylist: [
        { username: "jang_che0l", userimg: "/images/hansungkwon/fol1.jpg" },
        { username: "hoonb41", userimg: "/images/hansungkwon/fol2.jpg" },
        { username: "jae__rry", userimg: "/images/hansungkwon/fol3.jpg" },
        { username: "woonkyuko", userimg: "/images/hansungkwon/fol4.jpg" },
        { username: "gml_jin7875", userimg: "/images/hansungkwon/fol5.jpg" },
      ],
    };
  }
  render() {
    const { storylist } = this.state;
    return (
      <div className="Story_Kwon">
        {storylist.map((item, i) => {
          return (
            <ul key={i}>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src={item.userimg} />
                </div>
                <span className="story-name">{item.username}</span>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Story;
