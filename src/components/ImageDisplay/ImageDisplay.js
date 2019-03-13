import React from 'react';

const ImageDisplay = props => (
  <div className="col-3">
    <p onClick={props.checkDuplicate} id={props.name}>
      {props.name}
    </p>
  </div>
);

export default ImageDisplay;
