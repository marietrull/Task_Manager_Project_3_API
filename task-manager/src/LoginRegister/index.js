import React from 'react';
import './style.css';


const LoginRegister = ({loginAndRegister, registering,changeRegistering}) => {

	console.log(registering);

	return(
	
		<div className="LogRegField" >

			<div className="LoginTab Tab" onClick={changeRegistering}>Login</div> 

			<div className="RegisterTab Tab" onClick={changeRegistering}>Register</div> 

			<div className="LogRegContain" >
				<input className="InpUser" type="text" placeholder={registering ? "Create Username" : "Username"} />

				<input className="InpPass" type="password" placeholder={registering ? "Create Password" : "Password"}/>

				<button className="LogBtn" onClick={loginAndRegister}> {registering ? "Register" : "Login"} </button>
			</div>

		</div>
	)

}




export default LoginRegister;





















