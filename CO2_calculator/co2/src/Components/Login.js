import React from 'react';
import Logo from "../assets/logo.png";
import "../styling/Login.css";
class Login extends React.Component{
    state={
        username:'',
        pwd:''
    }


    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
    }

    handleSignUp = (e) =>{
        e.preventDefault()
    }

    handleSignOut = (e) =>{
        this.state.username = '';
        this.state.pwd = '';
    }

    handleVisibility = (e) =>{
        if(this.state.username!='' && this.state.pwd!=''){
            document.getElementById('form').style.display="none";
            document.getElementById('form2').style.display="block";
        }
        else if(this.state.username=='' && this.state.pwd==''){
            document.getElementById('form').style.display="block";
            document.getElementById('form2').style.display="none";
        }
    }
    render(){
        return(
            <div className='login'>
                <img className='login-logo' alt="Co2-logotype" src={Logo} />
                    
                <div>
                    <form id='form' onClick = {this.handleVisibility} onSubmit = {this.handleSubmit}>
                        <input className='input' type='username' name='username' placeholder='username...' required onChange = {this.handleChange}/>
                        <input className='input' type='password' name='pwd' placeholder='password...' required onChange = {this.handleChange}/>
                        <button className='login-button' onSubmit = {this.handleSubmit}>Sign In</button>
                        <button className="signup-button" onSubmit = {this.handleSignUp}>Sign Up</button>
                    </form>
                </div>
                <div>
                    <form id='form2' onClick = {this.handleVisibility}>
                        <button className="signout-button" onSubmit = {this.handleSignOut}>Sign Out</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;