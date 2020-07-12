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
      click: false,
    };
  }

  goToMain = () => {
    const { id, pw, userId, userPw } = this.state;
    if (userId.includes("@") && id === userId && pw === userPw) {
      this.props.history.push("/main");
    } else if (id !== userId && pw !== userPw) {
      this.setState({ click: true });
    }
  };

  handleChangeId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  handleChangePw = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.goToMain();
    }
  };

  render() {
    const { id, pw } = this.state;
    return (
      <div className="Login_JY">
        <div className="login__wrap">
          <div className="login__logo">
            <img alt="login__logo" src="/images/yoonjiyoung/logo_text.png" />
          </div>
          <div className="login__input">
            <input
              onChange={this.handleChangeId}
              onKeyUp={this.handleKeyPress}
              className="input__id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handleChangePw}
              onKeyUp={this.handleKeyPress}
              className="input__pw"
              type="password"
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
            <p className={this.state.click ? "wrongPw" : "correctPw"}>
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
