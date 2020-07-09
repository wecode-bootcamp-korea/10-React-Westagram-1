import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./login.scss";
import "../../../Styles/common.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "admin",
      pw: "admin",
      uid: "",
      upw: "",
    };
  }
  goToSignUp() {
    this.props.history.push("/main");
  }
  // handleLogin = (e) => {
  //   e.preventDefault();
  //   const { upw, pw } = this.state;
  //   upw === pw ? this.props.history.push("/main"), "correct" : "wrong";
  // };

  handleIdInput = (e) => {
    this.setState({ uid: e.target.value });
  };

  handlePwInput = (e) => {
    this.setState({ upw: e.target.value });
  };

  handleWrongPw = () => {
    return this.state.pw === this.state.upw ? "correct" : "wrong";
  };

  render() {
    const { uid, upw } = this.state;
    return (
      <div className="container">
        <div className="login-page">
          <img
            alt="logo"
            className="logo"
            src="/images/yeongjaeshin/logo_text.png"
          />
          <form className="input-user-info">
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
              className={!!uid * !!upw ? "activate" : "deactivate"}
              type="submit"
              onClick={this.goToSignUp}
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
