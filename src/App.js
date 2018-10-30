import React, { Component } from "react";
import "./App.css";
import images from "./images.json";

class App extends Component {
	state = {
		images
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<img id="images" src={images[0].image} alt="logo" />
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
