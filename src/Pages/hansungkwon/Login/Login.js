import React, { Component } from "react";
import "./Login.scss";
import "../../../Styles/common.scss";

class Login extends Component {
  goToSignup = () => {
    this.props.history.push("/main");
  };

  render() {
    return (
      <div className="login-body">
        <div className="container">
          <div className="wrapper">
            <div className="images">
              <img alt="logo" src="/images/hansungkwon/logo_text.png" />
            </div>
            <div className="boxes">
              <input
                type="text"
                className="id-box"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.inputIdValue}
              />
              <input
                type="password"
                className="pw-box"
                placeholder="비밀번호"
                onChange={this.inputPwValue}
              />
              <button className="login-btn" onClick={this.goToSignup}>
                로그인
              </button>
            </div>
            <p className="login-caption">
              <span>비밀번호를 잊으셨나요?</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
