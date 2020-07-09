import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  goToMain(e) {
    e.preventDefault();
    this.props.history.push("/main");
  }
  render() {
    return (
      <div className="Login">
        <div className="login__wrap">
          <div className="login__logo">
            <img alt="login__logo" src="/images/yoonjiyoung/logo_text.png" />
          </div>
          <form onSubmit={this.goToMain.bind(this)} className="login__input">
            <input
              className="input__id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="input__pw"
              type="password"
              placeholder="비밀번호"
            />
            <button className="login__btn">로그인</button>
          </form>
          <div className="login__forgetPw">
            <a href="###">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
