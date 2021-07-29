import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import DetailPage from './Screens/DetailPage';
import NotFound from './Screens/NotFound';
import HomePage from './Screens/HomePage'

function App() {
	return (
		<div>
			<Switch>
				<Route path="/films/:id" component={DetailPage}></Route>
				<Route path="/home" component={HomePage}></Route>
				<Route path="/not-found" component={NotFound}></Route>
				<Redirect from='/' exact to='/home'></Redirect>
				<Redirect to='/not-found'></Redirect>
			</Switch>
		</div>
	);
}

export default App;
