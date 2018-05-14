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

		const buttonText = e.target.innerText;

		const pwInput = e.target.previousSibling

		const userInput = pwInput.previousSibling

		const pwInputVal = pwInput.value;

		const userInputVal = userInput.value;

		console.log(pwInput, "pw");

		console.log(userInput, "username");

		if(buttonText === "Register"){

			const registerJSON = await fetch("http://localhost:9292/user/register",
			{
				method: "POST",
				body:JSON.stringify({username: userInputVal, password: pwInputVal})
			})

			const registerResponse = await registerJSON.json();

			registerResponse.success  ? this.setState({logged:true, message:registerResponse.message}) : this.setState({message: registerResponse.message})
		}


		if(buttonText === "Login"){

			const loginJSON = await fetch("http://localhost:9292/user/login",
			{
				method: "POST",
				body:JSON.stringify({username: userInputVal, password: pwInputVal})
			})

			const loginResponse = await loginJSON.json();

			loginResponse.success ? this.setState({logged:true, message:loginResponse.message}) : this.setState({message: loginResponse.message})
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

    	  		<div className="Logo"><span className="LogoTitle">TM</span></div>

    	  		<span className="Heading">WELCOME TO GA TASK MANAGER</span>

    	  	</div>

    	    {this.state.message !== "" ? <p>{this.state.message}</p> : null }

    	  	{this.state.logged ? <HomeworkContainer /> : <LoginRegister loginAndRegister={this.loginAndRegister} registering={this.state.registering} changeRegistering={this.changeRegistering}/>}  

     	   
     	 </div>
    	);
  	}
}

export default App;
