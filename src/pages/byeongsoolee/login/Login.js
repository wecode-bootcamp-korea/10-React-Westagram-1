import React from "react";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor : "",
      id : "",
      password : ""
    }
  }

  inputIdValue = (e) => {
    this.setState({
      id : e.target.value
    })
  }
  
  inputPasswordValue = (e) => {
    this.setState({
      password : e.target.value
    })
  }

  goToMainPage(e) {
    this.props.history.push('/main-byeongsoo');
    e.preventDefault();
    console.log("ID",this.state.id);
    console.log("Password",this.state.password);
  }

  render() {
    return (
      <div className="Login_BS">
        <div className="Wrapper">
            <div className="logo">
                <img src = "/images/byeongsoolee/logo_text.png" alt="메인로고" />
            </div>
            <div className="InfoBox">
                <input type="text" value={this.state.id} onChange={this.inputIdValue} className="login contents id" placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input type="password" value={this.state.password} onChange={this.inputPasswordValue} className="login contents pwd" placeholder="비밀번호" />
                <button className="login btn" 
                  style={{backgroundColor:this.state.id.includes("@") && this.state.password.length >5 ? "red" :"var(--white-blue-color)" }}
                 onClick={this.goToMainPage.bind(this)}>로그인</button>
            </div>
            <div className="forgetPwd">비밀번호를 잊으셨나요?</div>
        </div>
      </div>  
    );
  }
}

export default Login; 