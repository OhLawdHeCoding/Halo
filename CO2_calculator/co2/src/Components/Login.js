import React from 'react';
import Logo from "../assets/logo.png";
import "../styling/Login.css";
/*The login file is responsible for for the signing in, signing up and signing out. As of now 
a link named Sign In in the navbar takes a user to a page which displays the Login komponent.
As of now a person Signing up or Signing in simply updates a state for Login to unclude a 
personalized Username and Password. Signing out removes the username and password from the state.
*/

class Login extends React.Component{
    state={
        username:'',
        pwd:''
    }

    // Handler that updates state with username and password
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        document.getElementById('form').style.display="none";
        document.getElementById('form2').style.display="block";
    }

    // Handler that resets username and password when user logs out
    handleSignOut = (e) =>{
        this.setState({username: '', pwd: ''});
        console.log('Here', this.state)
        document.getElementById('form').style.display="block";
        document.getElementById('form2').style.display="none";
        e.preventDefault();
    }
    render(){
        return(
            <div className='login'>
                <img className='login-logo' alt="Co2-logotype" src={Logo} />
                    
                <div>
                    <form id='form' onSubmit = {this.handleSubmit}>
                        <input className='input' type='username' name='username' placeholder='username...' required onChange = {this.handleChange}/>
                        <input className='input' type='password' name='pwd' placeholder='password...' required onChange = {this.handleChange}/>
                        <button className='login-button' onSubmit = {this.handleSubmit}>Sign In</button>
                        <button className="signup-button" onSubmit = {this.handleSubmit}>Sign Up</button>
                    </form>
                </div>
                <div>
                    <form id='form2' onSubmit = {this.handleSignOut}>
                        <button className="signout-button" onSubmit = {this.handleSignOut}>Sign Out</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;