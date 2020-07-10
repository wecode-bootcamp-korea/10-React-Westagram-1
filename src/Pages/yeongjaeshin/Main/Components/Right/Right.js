import React from "react";
import "./Right.scss";

class Right extends React.Component {
  render() {
    return (
      <div className="right-fix">
        <div className="main-feed-right">
          <div className="main-feed-right-profile">
            <div className="right-profile-img-box">
              <img
                alt="right-profile-img"
                src="/images/yeongjaeshin/profile.jpg"
              />
            </div>
            <ul className="right-profile">
              <li className="right-profile-id">__masancityboy</li>
              <li className="right-profile-introduce">sʜɪɴ ʏᴇᴏɴɢ ᴊᴀᴇ</li>
            </ul>
          </div>
          <div className="recommend-container">
            <div className="right-recommend-box">
              <span className="recommend">회원님을 위한 추천</span>
              <span className="see-all">모두 보기</span>
            </div>
            <div className="recommend-profile-container">
              <div className="recommend-profile-img-box">
                <img
                  alt="recommend-profile-img"
                  src="http://bitly.kr/xcBDWWXv1hr"
                />
              </div>
              <ul className="recommend-profile">
                <li className="recommend-profile-id">realisshoman</li>
                <li className="recommend-profile-introduce">
                  회원님을 팔로우 합니다
                </li>
              </ul>
              <button>팔로우</button>
            </div>
            <div className="recommend-profile-container">
              <div className="recommend-profile-img-box">
                <img
                  alt="recommend-profile-img"
                  src="http://bitly.kr/jgstnMkAhEf"
                />
              </div>
              <ul className="recommend-profile">
                <li className="recommend-profile-id">nasungcityboy</li>
                <li className="recommend-profile-introduce">
                  회원님을 팔로우 합니다
                </li>
              </ul>
              <button>팔로우</button>
            </div>
            <div className="recommend-profile-container">
              <div className="recommend-profile-img-box">
                <img
                  alt="recommend-profile-img"
                  src="http://bitly.kr/pALfma6bNV8"
                />
              </div>
              <ul className="recommend-profile">
                <li className="recommend-profile-id">thisloop</li>
                <li className="recommend-profile-introduce">
                  회원님을 팔로우 합니다
                </li>
              </ul>
              <button>팔로우</button>
            </div>
            <div className="recommend-profile-container">
              <div className="recommend-profile-img-box">
                <img
                  alt="recommend-profile-img"
                  src="http://bitly.kr/KU7jRuBbyxc"
                />
              </div>
              <ul className="recommend-profile">
                <li className="recommend-profile-id">kimehwa</li>
                <li className="recommend-profile-introduce">
                  회원님을 팔로우 합니다
                </li>
              </ul>
              <button>팔로우</button>
            </div>
            <div className="recommend-profile-container">
              <div className="recommend-profile-img-box">
                <img
                  alt="recommend-profile-img"
                  src="http://bitly.kr/6NxEpTSJAmP"
                />
              </div>
              <ul className="recommend-profile">
                <li className="recommend-profile-id">thequiett</li>
                <li className="recommend-profile-introduce">
                  회원님을 팔로우 합니다
                </li>
              </ul>
              <button>팔로우</button>
            </div>
          </div>
          <div className="main-feed-right-copyright">
            <p>
              소개 ・ 도움말 ・ 홍보 ・ 센터 ・ API ・ 채용 ・ 정보 ・
              개인정보처리방침 ・ 약관 ・ 위치 ・ 인기 계정 ・ 해시태그 ・ 언어
            </p>
            <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
