import React, {useState} from 'react';

import NavBar from '../components/NavBar';

const Home = () => {
	return (
		<div className="App">

			<NavBar page="Home"/>

			<div>
				<p>USNCO-web</p>
				<p>Welcome to the website for the USNCO discord server!</p>
			</div>
		</div>
	)
}

export default Home;