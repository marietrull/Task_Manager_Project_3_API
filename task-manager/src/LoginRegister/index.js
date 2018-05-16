import React from 'react';
import './style.css';


const LoginRegister = ({loginAndRegister, registering, changeRegistering, hitEnter}) => {

	return(
	
		<div className="LogRegField" >


		

			<div className="TabContain">
				<div className="LoginTab Tab" onClick={changeRegistering}>Login</div> 

				<div className="RegisterTab Tab" onClick={changeRegistering}>Register</div>
			</div>	




			<div className="LogRegContain" >
				<div><input className="InpUser" type="text" placeholder={registering ? "Create Username" : "Username"} /></div>

				<div><input className="InpPass" type="password" onKeyPress={hitEnter} placeholder={registering ? "Create Password" : "Password"}/></div>

				<div className="LogBtnDiv" ><button className="LogBtn" onKeyPress={hitEnter} onClick={loginAndRegister}> {registering ? "Register" : "Login"} </button></div>
			</div>





		</div>
	)

}




export default LoginRegister;





















