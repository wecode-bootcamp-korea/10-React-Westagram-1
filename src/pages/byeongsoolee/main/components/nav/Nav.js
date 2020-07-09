import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
    render() {
      return (
        <nav className="Nav">
            <div className="container">
                <div className="logo">
                    <img alt="이미지 로고" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"/>
                    <img alt="텍스트 로고" src="/images/byeongsoolee/logo_text.png"/>
                </div>
                <div className="find">
                    <img alt="검색로고" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
                    <span>검색</span>
                </div>
                <div className="menu">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="탐색"/>
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트"/>
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="마이페이지"/>
                </div>
            </div>
        </nav>
      );
    }
  }

export default Nav; 

