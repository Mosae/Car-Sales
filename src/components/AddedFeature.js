import React from 'react';
import { connect } from 'react-redux';

const AddedFeature = (props) => {
	console.log('added props', props);
	const removeFeature = () => {
		//remove feature

		console.log('removeFeature Clicked');
	};
	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button className="button" onClick={removeFeature}>
				X
			</button>
			{props.feature.name}
		</li>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		featuresOnProps: [],
	};
};

export default connect(() => {
	return { newProp: 'green' };
})(AddedFeature);
