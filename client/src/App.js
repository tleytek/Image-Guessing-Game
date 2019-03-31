import React, { Component } from 'react';
import './App.css';
import images from './images.json';
import ImageDisplay from './components/ImageDisplay';
class App extends Component {
  state = {
    images,
    imagesClicked: [],
    score: 0,
    highScore: 0
  };

  componentDidMount() {
    this.randomizeImages();
  }
  checkDuplicate = event => {
    const imagesClicked = this.state.imagesClicked;
    let imageClicked = event.target.id;

    if (imagesClicked.indexOf(imageClicked) === -1) {
      this.setState({
        imagesClicked: [...imagesClicked, imageClicked],
        score: this.state.score + 1
      });
      this.randomizeImages();
    } else {
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

  randomizeImages = () => {
    const images = this.state.images.sort((a, b) => {
      return 0.5 - Math.random();
    });
    this.setState({ images: images });
  };

  render() {
    return (
      <div>
        <nav className="container-fluid sticky-top py-3 bg-dark text-light">
          <div className="row">
            <h2 className="col text-center font-weight-bold">Keeb Game</h2>
            <h2 className="col text-center font-weight-light">Click an Image to begin!</h2>
            <h2 className="col text-center font-weight-light">
              Score: {this.state.score} | Highest Score: {this.state.highScore}
            </h2>
          </div>
        </nav>

        <header className="container-fluid">
          <div className="row justify-content-center align-content-center py-5 bg-primary" style={{ height: '35vh' }}>
            <h1>Keyboard Memory Game!</h1>
          </div>
        </header>

        <main className="container">
          <div className="row" style={{ height: '90vh' }}>
            {this.state.images.map(image => {
              return (
                <ImageDisplay
                  key={image.name}
                  name={image.name}
                  imageUrl={image.imageUrl}
                  checkDuplicate={this.checkDuplicate}
                />
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
