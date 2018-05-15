import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeworkContainer from './HomeworkContainer';
import LoginRegister from './LoginRegister';

class App extends Component {

	constructor(){
		super();

		this.state = {

			logged: false,

			registering: false,

			message:""
		}
	}

	loginAndRegister= async(e)=>{

		console.log(e.target.parentNode.parentNode.childNodes[1].childNodes[0].value)

		const buttonText = e.target.innerText;

		const pwInputVal = e.target.parentNode.parentNode.childNodes[1].childNodes[0].value

		const userInputVal = e.target.parentNode.parentNode.childNodes[0].childNodes[0].value

		if(buttonText === "Register"){

			const registerJSON = await fetch("http://localhost:9292/user/register",
			{
				method: "POST",
				credentials: 'include',
				body:JSON.stringify({username: userInputVal, password: pwInputVal})
			})

			const registerResponse = await registerJSON.json();

			registerResponse.success  ? this.setState({logged:true, message:registerResponse.message}) : this.setState({message: registerResponse.message})
		}


		if(buttonText === "Login"){

			const loginJSON = await fetch("http://localhost:9292/user/login",
			{
				method: "POST",
				credentials: 'include',
				body:JSON.stringify({username: userInputVal, password: pwInputVal})
			})

			const loginResponse = await loginJSON.json();

			loginResponse.success ? this.setState({logged:true, message:loginResponse.message}) : this.setState({message: loginResponse.message})

			console.log(this.state)
		}



	}

	changeRegistering=(e)=>{

		const tabText = e.target.innerText;

		tabText === "Register" ? this.setState({registering: true}) : this.setState({registering: false});

	}


  	render() {
    	return (
    	  <div className="App">

    	  	<div className="Header">

    	  		<div className="Logo"><div className="LogoTitle">TM</div></div>

    	  		<div className="Heading">GENERAL ASSEMBLY TASK MANAGER</div>

    	  	</div>

    	    {this.state.message !== "" ? <p>{this.state.message}</p> : null }

    	  	{this.state.logged ? <HomeworkContainer /> : <LoginRegister loginAndRegister={this.loginAndRegister} registering={this.state.registering} changeRegistering={this.changeRegistering}/>}  

     	   
     	 </div>
    	);
  	}
}

export default App;
