import React, { Component } from 'react';
import '../components/css/SignUpForm.css';
import { Link } from 'react-router-dom';



class ExistingAccount extends Component {

	render() {
		return (
			<div className='ExisitingAccount'>
			 <h5> Already a member? <Link><a href='#'>Sign In</a></Link></h5>
			</div>
		)
	}
}









export default ExistingAccount;