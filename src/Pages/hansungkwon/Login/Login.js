import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "admin@admin.com",
      pw: "12345",
      userid: "",
      userpw: "",
      submit: false,
      validate: false,
    };
  }

  inputValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { id, pw, userid, userpw } = this.state;

    if (userid.includes("@") && id === userid && pw === userpw) {
      this.props.history.push("/main");
    } else {
      this.setState({ submit: true, validate: false });
    }
  };

  render() {
    const { userid, userpw, submit, validate } = this.state;
    return (
      <div className="Login_kwon">
        <div className="container">
          <div className="wrapper">
            <div className="images">
              <img alt="logo" src="/images/hansungkwon/logo_text.png" />
            </div>
            <form className="boxes" onSubmit={this.handleLogin}>
              <input
                onChange={this.inputValue}
                type="text"
                name="userid"
                className="id-box"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={this.inputValue}
                type="password"
                name="userpw"
                className="pw-box"
                placeholder="비밀번호"
              />
              <div className="login-alert">
                <p
                  className={
                    submit ? (validate ? "correct" : "wrong") : "correct"
                  }
                >
                  아이디와 비밀번호를 확인해주세요!
                </p>
              </div>
              <button
                className={
                  userid.includes("@") && userpw.length >= 5
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
