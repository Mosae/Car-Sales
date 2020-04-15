import React from 'react';
import { connect } from 'react-redux';

const AddedFeature = (props) => {
	const removeFeature = () => {
		//remove feature
	};
	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button
				className="button"
				onClick={() => {
					props.removeFeature(props.feature);
				}}>
				X
			</button>
			{props.feature.name}
		</li>
	);
};

// const mapStateToProps = (state) => {
// 	return {
// 		featuresOnProps: [],
// 	};
// };

export default connect((state) => {
	console.log(state);
	return { name: 'cobra' };
})(AddedFeature);
