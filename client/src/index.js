import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

//Views
import App from './views/App';
import SignUpForm from './views/SignUpForm';
import SignIn from './views/SignIn';
import UserDashboard from './views/UserDashboard';

//Styles
import './views/css/index.css';
import './views/css/SignUpForm.css';
import './views/css/UserDashboard.css';
import './views/css/UserDashboardOverview.css';
import './views/css/MileageLog.css';
import './views/css/RecentExpenses.css';

//Redux Store
import store from './store';

ReactDOM.render(

	<Router>
	   <App>
		  <Provider store={store}>
			<Route exact path='/' component={SignUpForm}/>
			<Route exact path='/signin' component={SignIn}/>
			<Route exact path='/userdashboard' component={UserDashboard}/>
		  </Provider>
	   </App>
	</Router>

, document.getElementById('root'));
