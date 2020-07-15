import React from "react";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor : "",
      id : "",
      password : "",
      ready : false,
      myId : "djaxornwkd12@gmail.com",
      myPassword :"qudtn12",
      passwordError : false
    }
  }

  inputIdValue = (e) => {
    this.setState({
      id : e.target.value
    })
  }
  
  inputPasswordValue = (e) => {
    this.setState({
      password : e.target.value,
      ready : e.target.value.length>5&&this.state.id.includes('@') ? true : false
    })
    
  }

  goToMainPage = (e)=> {
    const { id,password,myId,myPassword } = this.state
    if(id=== myId && password === myPassword) {
      this.props.history.push('/main-byeongsoo')
    }
    else {
      this.setState({
        passwordError : true 
      })
    }

    fetch("http://10.58.0.223:8000/user/signin", {
      method :"POST",
      body : JSON.stringify({
        email:this.state.id,
        password: this.state.password
      })
    })
    .then(res => res.json()) // JSON body -> JS
    .then(res => sessionStorage.setItem("access_token", res.access_token))
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
                <button className={this.state.ready ? "login ready" : "login btn"}
                 onClick={this.goToMainPage}>로그인</button>
            </div>
            <div className={this.state.passwordError ? "error":"noError"}>잘못된 비밀번호입니다. 다시 확인하세요</div>
            <div className="forgetPwd">비밀번호를 잊으셨나요?</div>
        </div>
      </div>  
    );
  }
}

export default Login; 