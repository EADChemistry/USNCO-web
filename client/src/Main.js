import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

const Main = () => {
	return (
		<BrowserRouter><Switch>
			<Route exact path='/' component={Home}/>
			<Route exact path='/about' component={About}/>

			<Route component={PageNotFound}/>
		</Switch></BrowserRouter>
	);
}

export default Main;