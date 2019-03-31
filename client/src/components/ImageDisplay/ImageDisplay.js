import React from 'react';

const ImageDisplay = props => (
  <div className="col-3">
    <img onClick={props.checkDuplicate} id={props.name} src={props.imageUrl} alt={props.name} style={styles} />
  </div>
);

const styles = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  paddingTop: '30px',
  paddingBottom: '30px'
};

export default ImageDisplay;
