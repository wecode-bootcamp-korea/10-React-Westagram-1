import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../../Styles/reset.scss';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      pw: '',
      adminId: '@hyosikkim',
      adminPw: '123456',
    };
  }

  handleIdPw = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginToMain = () => {
    this.props.history.push('/main-hyosik');
  };

  checkIdPw = () => {
    const { id, pw, adminId, adminPw } = this.state;
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    }).then((res) => res.json());

    if (id === adminId && pw === adminPw) {
      this.loginToMain();
    } else {
      alert('비밀번호가 맞지 않습니다.');
    }
  };

  loginEnter = (e) => {
    if (e.keyCode === 13) {
      this.checkIdPw();
    }
  };

  render() {
    const { id, pw } = this.state;
    return (
      <div className="Login_KHS">
        <div className="login-container" onKeyUp={this.loginEnter}>
          <img className="box img" src="/images/hyosikkim/logo_text.png" alt="로고" />
          <input
            className="box input id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={id}
            onChange={this.handleIdPw}
            name="id"
          />
          <input
            className="box input pw"
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={this.handleIdPw}
            name="pw"
          />
          <button
            className={id.includes('@') && pw.length >= 5 ? 'box login-changed' : 'box login'}
            onClick={this.checkIdPw}
          >
            로그인
          </button>
          <span className="box forget">비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
