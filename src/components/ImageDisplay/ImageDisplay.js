import React from 'react';

class ImageDisplay extends React.Component {
  state = {
    hover: false
  };

  hoverOn = () => {
    this.setState({ hover: true });
  };

  hoverOff = () => {
    this.setState({ hover: false });
  };

  render() {
    return (
      <div className="col-3 my-5 p-0 mx-2">
        <img
          onClick={this.props.checkDuplicate}
          id={this.props.name}
          src={this.props.imageUrl}
          alt={this.props.name}
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
          style={this.state.hover ? { ...styles.imageStyle, ...styles.hoverImageStyle } : { ...styles.imageStyle }}
        />
      </div>
    );
  }
}

const styles = {
  imageStyle: {
    objectFit: 'cover',
    width: '90%',
    height: '100%',
    border: '5px solid grey',
    borderRadius: '10px'
  },
  hoverImageStyle: {
    transform: 'scale(1.05)'
  }
};

export default ImageDisplay;
