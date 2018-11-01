import React from "react";

const ImageDisplay = props => (
	<div>
		<p onClick={props.checkDuplicate} id={props.name}>
			{props.name}
		</p>
	</div>
);

export default ImageDisplay;
