import React, { Component } from "react";
import "./Login.scss";
import "../../../Styles/reset.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "admin",
      pw: "12345",
      userid: "",
      uesrpw: "",
      btnColor: "login-btn",
    };
  }
  inputIdValue = (e) => {
    this.setState({
      userid: e.target.value,
    });
  };
  inputPwValue = (e) => {
    this.setState({
      userpw: e.target.value,
    });
  };

  changeLogin = (e) => {
    e.preventDefault();
    this.state.id.length > 0 && this.state.pw.length > 0
      ? this.setState({ btnColor: "login-canbtn" })
      : this.setState({ btnColor: "login-btn" });
  };

  goToMain = () => {
    this.props.history.push("/main");
  };

  tryLogin = (e) => {
    e.preventDefault();
    if (
      this.state.id === this.state.userid &&
      this.state.pw === this.state.userpw
    ) {
      this.goToMain();
    } else {
      alert("아이디와 비밀번호를 확인해주세요!");
    }
  };

  render() {
    return (
      <div className="Login_kwon">
        <div className="container">
          <div className="wrapper">
            <div className="images">
              <img alt="logo" src="/images/hansungkwon/logo_text.png" />
            </div>
            <form className="boxes" onSubmit={this.tryLogin}>
              <input
                onChange={this.inputIdValue}
                type="text"
                className="id-box"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={this.inputPwValue}
                type="password"
                className="pw-box"
                placeholder="비밀번호"
              />
              <button
                className={
                  !!this.state.userid * !!this.state.userpw
                    ? "login-canbtn"
                    : "login-btn"
                }
              >
                로그인
              </button>
            </form>
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
