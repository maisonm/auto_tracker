import React from 'react';
import SiteLogo from '../views/assets/logo.svg';


const SignIn = () => {

	return (
		<div className='SignUpFormContainer'> 
			<div className="LogoContainer">
				<img src={SiteLogo} alt='site logo'/>
				<h4>Track your automotive expenses.</h4>
			</div>
			<form className='SignUpForm' method='POST' action='/account/signin'>
				<div className='SignUpFormHeading'> <h3>Sign in below</h3> </div>
					<input name='username' type='text' placeholder='Username:'/>
				<input name='password' type='text' placeholder='Password:'/>
				<button> Sign In </button>
			</form>
		</div>
	)

}



export default SignIn;