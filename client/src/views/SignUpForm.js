import React from 'react';
import SiteLogo from '../views/assets/logo.svg';

const SignUpForm = () => {

		return (
			<div className='SignUpFormContainer'> 
				<div className="LogoContainer">
					<img src={SiteLogo} alt='site logo'/>
					<h4>Track your automotive expenses.</h4>
				</div>
				<form className='SignUpForm' method='POST' action='/account/signup'>
					<div className='SignUpFormHeading'> <h3>New here? Create an account!</h3> </div>
					<input name='email' type='text' placeholder='Email:'/>
						<input name='username' type='text' placeholder='Username:'/>
					<input name='password' type='text' placeholder='Password:'/>
					<button> Sign Up </button>
				</form>
			</div>
		)
}



export default SignUpForm;