import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import DetailPage from './Screens/DetailPage';
import NotFound from './Screens/NotFound';
import HomePage from './Screens/HomePage'
import LoginPage from './Screens/LoginPage';
import RegisterPage from './Screens/RegisterPage';
import AccountPage from './Screens/AccountPage';
import { useEffect, useState } from 'react';
import {getCurrentUser} from './services/authService'

function App() {

	return (
		<div>
			<Switch>
				<Route path="/films/:id" component={DetailPage}></Route>
				<Route path="/home" component={HomePage}></Route>
				<Route path="/login" component={LoginPage}></Route>
				<Route path="/register" component={RegisterPage}></Route>
				<Route path="/account" component={AccountPage}></Route>
				<Route path="/not-found" component={NotFound}></Route>
				<Redirect from='/' exact to='/home'></Redirect>
				<Redirect to='/not-found'></Redirect>
			</Switch>
		</div>
	);
}

export default App;
