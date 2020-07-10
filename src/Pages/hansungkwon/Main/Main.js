import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import Feeds from "./Components/Feeds/Feeds";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="Main_kwon">
          <main className="main-contatiner">
            <Feeds />
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
                  <div className="recom-list">
                    <div className="recom-userimg">
                      <img
                        alt="recom-userimg"
                        src="/images/hansungkwon/fol1.jpg"
                      />
                    </div>
                    <ul className="recom-userinfo">
                      <li className="recom-myid">jang_che0l</li>
                      <li className="recom-myname">회원님을 팔로우합니다</li>
                    </ul>
                    <div className="recom-follow">
                      <span>팔로우</span>
                    </div>
                  </div>
                  <div className="recom-list">
                    <div className="recom-userimg">
                      <img
                        alt="recom-userimg"
                        src="/images/hansungkwon/fol2.jpg"
                      />
                    </div>
                    <ul className="recom-userinfo">
                      <li className="recom-myid">hoonb41</li>
                      <li className="recom-myname">회원님을 팔로우합니다</li>
                    </ul>
                    <div className="recom-follow">
                      <span>팔로우</span>
                    </div>
                  </div>
                  <div className="recom-list">
                    <div className="recom-userimg">
                      <img
                        alt="recom-userimg"
                        src="/images/hansungkwon/fol3.jpg"
                      />
                    </div>
                    <ul className="recom-userinfo">
                      <li className="recom-myid">jae___rry</li>
                      <li className="recom-myname">회원님을 팔로우합니다</li>
                    </ul>
                    <div className="recom-follow">
                      <span>팔로우</span>
                    </div>
                  </div>
                  <div className="recom-list">
                    <div className="recom-userimg">
                      <img
                        alt="recom-userimg"
                        src="/images/hansungkwon/fol4.jpg"
                      />
                    </div>
                    <ul className="recom-userinfo">
                      <li className="recom-myid">woonkyuko</li>
                      <li className="recom-myname">회원님을 팔로우합니다</li>
                    </ul>
                    <div className="recom-follow">
                      <span>팔로우</span>
                    </div>
                  </div>
                  <div className="recom-list">
                    <div className="recom-userimg">
                      <img
                        alt="recom-userimg"
                        src="/images/hansungkwon/fol5.jpg"
                      />
                    </div>
                    <ul className="recom-userinfo">
                      <li className="recom-myid">gml_jin7875</li>
                      <li className="recom-myname">회원님을 팔로우합니다</li>
                    </ul>
                    <div className="recom-follow">
                      <span>팔로우</span>
                    </div>
                  </div>
                </div>
                <div className="caption">
                  <p className="cap-kr">
                    <span>소개 · 도움말 · 홍보 센터 · API · 채용 정보 · </span>
                    <br />
                    <span>
                      개인정보처리방침 · 약관 · 위치 · 인기 계정 · 해시태그 ·
                      언어
                    </span>
                  </p>
                  <p className="cap-copy">
                    <span>&copy; 2020 INSTAGRAM FROM FACEBOOKS</span>
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
