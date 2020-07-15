import React, { Component } from "react";
import "./Side.scss";

class Side extends Component {
  constructor() {
    super();
    this.state = {
      sideProfile: [
        { username: "jang_che0l", userimg: "/images/hansungkwon/fol1.jpg" },
        { username: "hoonb41", userimg: "/images/hansungkwon/fol2.jpg" },
        { username: "jae__rry", userimg: "/images/hansungkwon/fol3.jpg" },
        { username: "woonkyuko", userimg: "/images/hansungkwon/fol4.jpg" },
        { username: "gml_jin7875", userimg: "/images/hansungkwon/fol5.jpg" },
      ],
    };
  }
  render() {
    const { sideProfile } = this.state;
    return (
      <div className="Side_Kwon">
        <div className="side">
          <div className="side-user">
            <div className="side-userimg">
              <img alt="side-userimg" src="/images/hansungkwon/me.jpg" />
            </div>
            <ul className="side-userinfo">
              <li className="side-myid">ivorycode</li>
              <li className="side-myname">HanSung Kwon</li>
            </ul>
          </div>
          <div className="side-recom">
            <div className="recom-menu">
              <span>회원님을 위한 추천</span>
              <span className="recom-allbtn"> 모두 보기</span>
            </div>
            {sideProfile.map((item, i) => {
              return (
                <div className="recom-list" key={i}>
                  <div className="recom-userimg">
                    <img alt="recom-userimg" src={item.userimg} />
                  </div>
                  <ul className="recom-userinfo">
                    <li className="recom-myid">{item.username}</li>
                    <li className="recom-myname">회원님을 팔로우합니다</li>
                  </ul>
                  <div className="recom-follow">
                    <span>팔로우</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="caption">
            <p className="cap-kr">
              <span>소개 · 도움말 · 홍보 센터 · API · 채용 정보 · </span>
              <br />
              <span>
                개인정보처리방침 · 약관 · 위치 · 인기 계정 · 해시태그 · 언어
              </span>
            </p>
            <p className="cap-copy">
              <span>&copy; 2020 INSTAGRAM FROM FACEBOOKS</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Side;
