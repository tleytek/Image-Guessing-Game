import React from 'react';

const ImageDisplay = props => (
  <div className="col-3 my-5">
    <img onClick={props.checkDuplicate} id={props.name} src={props.imageUrl} alt={props.name} style={styles} />
  </div>
);

const styles = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  border: '5px solid black'
};

export default ImageDisplay;
