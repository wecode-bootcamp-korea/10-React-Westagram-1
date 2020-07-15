import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      pw: "",
      userId: "yojuyoon@wecode.com",
      userPw: "wecode",
      isValidUserInfo: false,
    };
  }

  goToMain = () => {
    const { id, pw, userId, userPw } = this.state;
    if (userId.includes("@") && id === userId && pw === userPw) {
      this.props.history.push("/main");
    } else if (id !== userId && pw !== userPw) {
      this.setState({ isValidUserInfo: true });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleKeyUp = (e) => {
    if (e.key === "Enter") {
      this.goToMain();
    }
  };

  render() {
    const { id, pw } = this.state;
    return (
      <div className="Login_JY" onKeyUp={this.handleKeyUp}>
        <div className="login__wrap">
          <div className="login__logo">
            <img alt="login__logo" src="/images/yoonjiyoung/logo_text.png" />
          </div>
          <div className="login__input">
            <input
              onChange={this.handleChange}
              className="input__id"
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handleChange}
              className="input__pw"
              type="password"
              name="pw"
              placeholder="비밀번호"
            />
            <button
              onClick={this.goToMain}
              className={
                id.includes("@") && pw.length >= 5
                  ? "login__activateBtn"
                  : "login__btn"
              }
            >
              로그인
            </button>
          </div>
          <div className="login__forgetPw">
            <p className={this.state.isValidUserInfo ? "wrongPw" : "correctPw"}>
              잘못된 비밀번호입니다. 다시 확인하세요.
            </p>
            <Link to="/pw">비밀번호를 잊으셨나요?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
