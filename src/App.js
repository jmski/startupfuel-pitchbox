import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUp from './components/SignUp';
import Hero from './components/Hero';
import './css/App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<NavigationBar />
				<Hero />
				<SignUp />
				<Switch>
					<Route exact path='/' component={SignUp}/>

				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
