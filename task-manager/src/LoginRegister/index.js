import React from 'react'

const LoginRegister = ({loginAndRegister, registering,changeRegistering}) => {

	console.log(registering);

	return(
	
		<div>

			<p> <span onClick={changeRegistering}>Login</span>*<span onClick={changeRegistering}>Register</span> </p>

			<input type="text" placeholder={registering ? "Create Username" : "Username"} />

			<input type="password" placeholder={registering ? "Create Password" : "Password"}/>

			<button onClick={loginAndRegister}> {registering ? "Register" : "Login"} </button>

		</div>
	)

}




export default LoginRegister;





















