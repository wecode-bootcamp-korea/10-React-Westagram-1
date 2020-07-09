import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./login.scss";
import "../../../Styles/reset.scss";
import "../../../Styles/common.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "admin",
      pw: "admin",
      userid: "",
      userpw: "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { pw, id, userid, userpw } = this.state;
    if (id === userid && userpw === pw) {
      this.props.history.push("/main");
    }
  };

  handleIdInput = (e) => {
    this.setState({ userid: e.target.value });
  };

  handlePwInput = (e) => {
    this.setState({ userpw: e.target.value });
  };

  handleWrongPw = () => {
    const { userpw, pw } = this.state;
    return pw === userpw ? "correct" : "wrong";
  };

  render() {
    const { userid, userpw } = this.state;
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
              className={!!userid * !!userpw ? "activate" : "deactivate"}
              type="submit"
            >
              로그인
            </button>
          </form>
          <p className="correct">잘못된 비밀번호입니다. 다시 확인하세요.</p>
          <div className="forgetpw">
            <Link to="/">비밀번호를 잊으셨나요?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
