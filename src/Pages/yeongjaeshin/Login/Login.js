import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "admin@example.com",
      pw: "admin",
      userid: "",
      userpw: "",
      submit: false,
      validate: false,
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { id, pw, userid, userpw } = this.state;
    if (userid.includes("@") && id === userid && pw === userpw) {
      this.props.history.push("/main");
    } else {
      this.setState({
        submit: true,
        validate: false,
      });
    }
  };

  handleIdInput = (e) => {
    this.setState({
      userid: e.target.value,
    });
  };

  handlePwInput = (e) => {
    this.setState({
      userpw: e.target.value,
    });
  };

  render() {
    const { userid, userpw, submit, validate } = this.state;
    return (
      <div className="Login_YJ">
        <div className="login-page">
          <img
            alt="logo"
            className="logo"
            src="/images/yeongjaeshin/logo_text.png"
          />
          <form className="input-user-info" onSubmit={this.handleLogin}>
            <input
              className="userinfo"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              className="userinfo"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button
              className={
                userid.includes("@") && userpw.length >= 5
                  ? "activate"
                  : "deactivate"
              }
              type="submit"
            >
              로그인
            </button>
          </form>
          <div className="forgetpw">
            <p
              className={submit ? (validate ? "correct" : "wrong") : "correct"}
            >
              잘못된 비밀번호입니다. 다시 확인하세요.
            </p>
            <Link to="/">비밀번호를 잊으셨나요?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
