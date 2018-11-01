import React, { Component } from "react";
import "./App.css";
import images from "./images.json";
// import Wrapper from
import ImageDisplay from "./components/ImageDisplay";
import Log from "./Log";

class App extends Component {
	// Setting this.state.images to the images json array
	state = {
		images,
		imagesClicked: [],
		score: 0,
		highScore: 0
	};

	checkDuplicate = event => {
		const imagesClicked = this.state.imagesClicked;
		let imageClicked = event.target.id;
		console.log(imageClicked);

		// I don't know why I wasn't seeing how this is still modifying state directly
		// let newStateArray = imagesClicked.push(imageClicked);
		// ^^^^^^^^^^^^^^^ BAD ^^^^^^^^^^^^^^^^^^^^^^^^^^^

		if (imagesClicked.indexOf(imageClicked) === -1) {
			this.setState({
				//I saw an example for how to add to a state array on stackoverflow and
				//kept trying it thinking the triple dot that was in the commenters solution
				// was just there way of saying "theres previous stuff here" but its
				//actually something called spread operator?
				imagesClicked: [...imagesClicked, imageClicked],
				score: this.state.score + 1
			});
			Log.info("good", "App Component");
			this.randomizeImages();
		} else {
			Log.info("bad", "App Component");
			this.restartGame();
			this.randomizeImages();
		}
	};

	checkHighScore = () => {
		if (this.state.score > this.state.highScore) {
			this.setState({
				highScore: this.state.score
			});
		}
	};

	restartGame = () => {
		this.checkHighScore();
		this.setState({
			score: 0,
			imagesClicked: []
		});
	};

	// Cool, this executes the randomize array on page refresh AKA componentDidMount()
	componentDidMount() {
		this.randomizeImages();
	}

	randomizeImages = () => {
		// Randomize this.state.images with images
		const images = this.state.images.sort((a, b) => {
			return 0.5 - Math.random();
		});

		this.setState({ images: images });
	};

	render() {
		return (
			<div>
				<p>{this.state.score}</p>

				{/* {this.state.imagesClicked.map(element => (
					<p>{element}</p>
				))} */}

				{this.state.images.map(image => (
					<ImageDisplay
						key={image.name}
						name={image.name}
						checkDuplicate={this.checkDuplicate}
					/>
				))}
			</div>
		);
	}
}

export default App;
