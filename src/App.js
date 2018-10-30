import React, { Component } from "react";
import "./App.css";
import images from "./images.json";
// import Wrapper from
import ImageDisplay from "./components/ImageDisplay";

class App extends Component {
	// Setting this.state.images to the images json array
	state = {
		images
	};

	//Cool, this executes the randomize array on page refresh AKA componentDidMount()
	componentDidMount() {
		this.randomizeImages();
	}
	randomizeImages = () => {
		// Randomize this.state.images with images
		const images = this.state.images.sort((a, b) => {
			return 0.5 - Math.random();
		});

		this.setState({ images });
	};

	render() {
		return (
			<div>
				{this.state.images.map(image => (
					<ImageDisplay
						name={image.name}
						randomizeImages={this.randomizeImages}
					/>
				))}
			</div>
		);
	}
}

export default App;
