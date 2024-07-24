import { Component } from "react";
import "./index.css"
import Cookies from "js-cookie"

class Login extends Component{
    state={username:"", password:"", showErrorMessage:false, errorMsg:""}

    user=(event)=>{
        this.setState({username:event.target.value})
    }
    pass=(event)=>{
        this.setState({password:event.target.value})
    }

    login=async()=>{
        const {username, password}=this.state
        if (username!=="" && password!==""){
           const data={
            username,
            password
           }
           const options = {
            method: "POST",
            body: JSON.stringify(data)
        }
        const response = await fetch("https://apis.ccbp.in/login", options)
        console.log(response)

        if (response.ok === true) {
            const {history}=this.props
            const resdata = await response.json()
            console.log(resdata)
            console.log(resdata.jwt_token)
            Cookies.set('jwt_token', resdata.jwt_token, { expires: 30 })
            history.replace("/")
        } else {
            const resdata1 = await response.json()
            console.log(resdata1)
            console.log(resdata1.error_msg)
            this.setState({showErrorMessage:true, errorMsg:resdata1.error_msg})
        }
        }
        else{
            this.setState({showErrorMessage:true, errorMsg:"*Enter both username and password"})
        }
    }

   render(){
    const {username, password, showErrorMessage, errorMsg} = this.state
    return(
        <div className="loginPageCon1">
            <img className="loginPageBookHubImg1" src="https://res.cloudinary.com/dgbetanap/image/upload/v1711169643/Rectangle_1467bookhublogin_lgsp6h.png" alt="LoginPageBookHubImage" />
            <div className="loginPageCon2">
                 <div className="loginPageCon3">
                       <img className="loginPageBookHubImg2" src="https://res.cloudinary.com/dgbetanap/image/upload/v1711169700/Group_7731bookhubimg_nugzjy.png" alt="LoginPageBook"/>
                       <div className="loginPageCon4">
                        <label htmlFor="usernamInput" className="labelEleLogin">Username*</label>
                        <input value={username} onChange={this.user} className="inputEleLogin" type="text" id="usernamInput" placeholder="Enter your username"/>
                       </div>
                       <div className="loginPageCon4">
                        <label htmlFor="passwordInput" className="labelEleLogin">Password*</label>
                        <input value={password} onChange={this.pass} className="inputEleLogin" type="password" id="passwordInput" placeholder="Enter your password"/>

                       </div>
                       {showErrorMessage && <p className="error-msg">{errorMsg}</p>}
                       
                       <button className="buttonLogin" onClick={this.login} type="button">Login</button>
                 </div>
            </div>
        </div>
    )
   }
}

export default Login