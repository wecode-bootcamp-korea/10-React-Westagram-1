import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "admin@admin.com",
      pw: "12345",
      userid: "",
      uesrpw: "",
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

  goToMain = () => {
    this.props.history.push("/main");
  };

  tryLogin = (e) => {
    e.preventDefault();
    if (
      this.state.id === this.state.userid &&
      this.state.pw === this.state.userpw
    ) {
      if (!this.state.userid.indexOf("@") || this.state.userpw.length < 5) {
        alert("아이디와 비밀번호를 확인해주세요!");
      }
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
              <button className="login-btn">로그인</button>
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
