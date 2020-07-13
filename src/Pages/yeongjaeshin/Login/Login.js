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

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, pw, userid, userpw } = this.state;
    userid.includes("@") && id === userid && pw === userpw
      ? this.props.history.push("/main-yeongjae")
      : this.setState({
          submit: true,
          validate: false,
        });
  };

  handleUserInfo = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
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
          <form className="input-user-info" onSubmit={this.handleSubmit}>
            <input
              className="userinfo"
              type="text"
              value={userid}
              name="userid"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleUserInfo}
            />
            <input
              className="userinfo"
              type="password"
              value={userpw}
              name="userpw"
              placeholder="비밀번호"
              onChange={this.handleUserInfo}
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
