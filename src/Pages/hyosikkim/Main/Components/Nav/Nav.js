import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav_KHS">
        <div className="nav-container">
          <div className="nav-position">
            <img
              className="img-cam"
              alt="카메라"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
            />
            <div className="vertical-line"></div>
            <img className="img-logo" alt="로고" src="/images/hyosikkim/logo_text.png" />
          </div>
          <div className="nav-position nav-mid">
            <i className="fas fa-search" id="magnify"></i>
            <input id="search-input" type="search" placeholder="Search" />
          </div>
          <div className="nav-position">
            <div className="nav__right-container">
              <img
                alt="나침반"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
              <img
                alt="하트"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                alt="상반신"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
