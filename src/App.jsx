import React from 'react';
import PasswordChangeBox from './components/PasswordChangeBox.jsx';
import BackButtonPositions from './components/BackButtonPositions.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="lvd-passwordchangebox-demo-container">
				<PasswordChangeBox 
					requireExistingPassword={true}
					backActionButtonProps={{
						position: BackButtonPositions.right
					}}
				/>
			</div>
		);
	}
}