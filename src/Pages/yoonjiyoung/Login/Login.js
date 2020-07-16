import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      userPw: "",
      isValidUserInfo: false,
    };
  }

  goToMain = () => {
    const { userId, userPw } = this.state;
    fetch("http://10.58.0.219:8000/user/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then((res) => res.json())
      .then((res) => sessionStorage.setItem("access_token", res.access_token));
    if (sessionStorage.getItem("access_token")) {
      alert("로그인 성공!");
      this.props.history.push("/main");
    } else {
      this.setState({ isValidUserInfo: true });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleKeyUp = (e) => {
    if (e.key === "Enter") {
      this.goToMain();
    }
  };

  render() {
    const { handleKeyUp, handleChange, goToMain } = this;
    const { id, pw, isValidUserInfo } = this.state;
    return (
      <div className="Login_JY" onKeyUp={handleKeyUp}>
        <div className="login__wrap">
          <div className="login__logo">
            <img alt="login__logo" src="/images/yoonjiyoung/logo_text.png" />
          </div>
          <div className="login__input">
            <input
              onChange={handleChange}
              className="input__id"
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={handleChange}
              className="input__pw"
              type="password"
              name="pw"
              placeholder="비밀번호"
            />
            <button
              onClick={goToMain}
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
            <p className={isValidUserInfo ? "wrongPw" : "correctPw"}>
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
