import React from "react";
import "./Login.scss";

class Login extends React.Component {
  
  goToSignUp() {
    this.props.history.push('/main');
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="Wrapper">
            <div className="logo">
                <img src = "/images/byeongsoolee/logo_text.png" alt="메인로고" />
            </div>
            <div className="InfoBox">
                <input type="text" className="login contents id" placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input type="password" className="login contents pwd" placeholder="비밀번호" />
                <button className="login btn" onClick={this.goToSignUp.bind(this)}>로그인</button>
            </div>
            <div className="forgetPwd">비밀번호를 잊으셨나요?</div>
        </div>
      </div>  
    );
  }
}

export default Login; 