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
				<Home/>
				<Switch>
					<Route exact path='/' component={Home}/>

				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
