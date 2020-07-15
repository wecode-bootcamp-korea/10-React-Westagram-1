import React from "react";
import "./MainRight.scss";
import { randomData } from "../../../data";

class MainRight extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: randomData,
    };
  }
  render() {
    return (
      <div className="Main__right_JY">
        <div className="main__right-profile">
          <img
            alt="main__right"
            className="main__right-photo"
            src="/images/yoonjiyoung/profile1.jpg"
          />
          <div className="main__right-user">
            <span className="user__name">yojuyoon</span>
            <br />
          </div>
        </div>
        <div className="main__right-recommend">
          <div className="main__right-top">
            <span className="main__right-top-title">회원님을 위한 추천</span>
            <span className="main__right-top-all">모두 보기</span>
          </div>
          {this.state.profile.map((column, index) => {
            return (
              <div className="recommend__column">
                <div className="recommend__profile-column">
                  <div className="recommend__profile">
                    <img
                      key={index.id}
                      alt="user__profile"
                      className="user__profile-photo"
                      src={column.imageUrl}
                    />
                  </div>
                  <div className="recommend__user">
                    <span className="user__name">{column.id}</span>
                    <br />
                    <span className="recommend__status">
                      melon + 10 님이 팔로우합니다
                    </span>
                  </div>
                </div>
                <div className="recommend__follow">팔로우</div>
              </div>
            );
          })}
        </div>
        <div className="main__right-infoTxt">
          <p>Instagram 정보 ・ 지원 ・ 홍보센터 ・ API</p>
          <p>채용 정보 ・ 개인정보처리방침 ・ 약관 ・</p>
          <p>디렉터리 ・ 프로필 ・ 해시태그 ・ 언어</p>
          <br />
          <p>@2020 INSTAGRAM</p>
        </div>
      </div>
    );
  }
}
export default MainRight;
