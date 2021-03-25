import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import './css/App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<NavigationBar />
				
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/services' />
					<Route path='/contact' />
					<Route path='/signup' />

				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
