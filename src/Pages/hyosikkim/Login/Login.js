import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../../Styles/common.scss';
import './Login.scss';

class Login extends React.Component {
  loginToMain = () => {
    this.props.history.push('/main');
  };

  render() {
    return (
      <div className="login-box">
        <div className="login-container">
          <img className="box img" src="/images/hyosikkim/logo_text.png" alt="로고" />
          <input
            className="box input id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input className="box input pw" type="password" placeholder="비밀번호" />
          <button className="box login" onClick={this.loginToMain}>
            로그인
          </button>
          <span className="box forget">비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
