import React, { Component } from 'react';
import './App.css';
import HomeworkContainer from './HomeworkContainer';
import LoginRegister from './LoginRegister';

class App extends Component {

	constructor(){
		super();

		this.state = {

			logged: false,

			registering: false,

			message:"",

			username:""
		}
	}

	hitEnter = (e) => {

		console.log(e.charCode, 'key hit')

		if (e.charCode === 13){
			console.log ("ANNYTHINGGG")
			this.loginAndRegister(e);
		} 
		
	}

	loginAndRegister= async(e)=>{


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

			registerResponse.success  ? this.setState({logged:true, username:registerResponse.username}) : this.setState({message: registerResponse.message})
		}


		else {

			const loginJSON = await fetch("http://localhost:9292/user/login",
			{
				method: "POST",
				credentials: 'include',
				body:JSON.stringify({username: userInputVal, password: pwInputVal})
			})

			const loginResponse = await loginJSON.json();

			loginResponse.success ? this.setState({logged:true, username:loginResponse.username}) : this.setState({message: loginResponse.message})

		}

	}

	changeRegistering = (e) => {

		const tabText = e.target.innerText;

		tabText === "Register" ? this.setState({registering: true}) : this.setState({registering: false});

	}

	logout = async (e) => {

		const logout = await fetch("http://localhost:9292/user/logout",
		
		{
			method: 'POST',
			credentials: 'include',
		})

		this.setState({
			logged: false
		});
		
	}



  	render() {

  		const logoutClass = this.state.logged ? 'logoutButton' : 'logoutNone'

    	return (
    	  <div className="App">

    	  	<div className="Header">

    	  		<div className="Logo"><div className="LogoTitle">TM</div></div>


    	  		<div className="HeadingContain">
    	  			<div className="Heading">GENERAL ASSEMBLY TASK MANAGER  </div>
					{this.state.logged ? <div className="Welcome">Welcome {this.state.username}</div> : null}
				</div>	
    	  	</div>


    	  	<button id={logoutClass} onClick={this.logout}> Logout </button>

    	  	{(this.state.message !== "" && !this.state.logged) ? <p> {this.state.message}</p> : null}


    	     

    	  	{this.state.logged ? <HomeworkContainer /> : <LoginRegister loginAndRegister={this.loginAndRegister} registering={this.state.registering} changeRegistering={this.changeRegistering} hitEnter={this.hitEnter}/>}  

     	   
     	 </div>
    	);
  	}
}

export default App;
