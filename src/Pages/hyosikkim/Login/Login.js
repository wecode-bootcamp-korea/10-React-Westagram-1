import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../../Styles/reset.scss';
import '../../../Styles/onlyMine.scss';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      pw: '',
      adminId: 'hyosikkim',
      adminPw: '1234',
    };
  }

  handleId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePw = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  loginToMain = () => {
    this.props.history.push('/main');
  };

  checkIdPw = () => {
    if (this.state.id === this.state.adminId && this.state.pw === this.state.adminPw) {
      this.loginToMain();
    }
  };

  render() {
    return (
      <div className="Login_KHS">
        <div className="login-container">
          <img className="box img" src="/images/hyosikkim/logo_text.png" alt="로고" />
          <input
            className="box input id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={this.state.id}
            onChange={this.handleId}
          />
          <input
            className="box input pw"
            type="password"
            placeholder="비밀번호"
            value={this.state.pw}
            onChange={this.handlePw}
          />
          <button className="box login" onClick={this.checkIdPw}>
            로그인
          </button>
          <span className="box forget">비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
