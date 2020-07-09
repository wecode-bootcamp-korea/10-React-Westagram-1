import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      pw: "",
      userId: "@admin",
      userPw: "abc1234",
    };
  }

  goToMain(e) {
    e.preventDefault();
    if (
      this.state.id === this.state.userId &&
      this.state.userPw === this.state.pw
    ) {
      this.props.history.push("/main");
    } else {
      alert("아이디와 비밀번호를 다시 입력하세요!");
    }
  }

  state = {
    id: "",
    pw: "",
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
              className="input__id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handleChangePw}
              className="input__pw"
              type="password"
              placeholder="비밀번호"
            />
            <button
              onClick={this.goToMain.bind(this)}
              className={
                id.length && pw.length > 1 ? "login__activateBtn" : "login__btn"
              }
            >
              로그인
            </button>
          </div>
          <div className="login__forgetPw">
            <Link to="/pw">비밀번호를 잊으셨나요?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
