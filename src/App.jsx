import React from 'react';
import PasswordChangeBox from './components/PasswordChangeBox.jsx';
import BackButtonPositions from './components/BackButtonPositions.js';
import FakePasswordChangeService from './FakePasswordChangeService.js';

import { evaluatePassword } from './PasswordEvaluation.js';
import { StrengthIndicatorStyles } from 'lvd-fluentui-passwordbox';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			working: false,
			passwordChangeMessage: null,
			newPasswordStrengthLevel: null,
			newPasswordRules: []
		};

		this._handlePasswordChangeBoxInitialized = 
			this._handlePasswordChangeBoxInitialized.bind(this);
		this._handlePasswordChangeBoxDisposed = 
			this._handlePasswordChangeBoxDisposed.bind(this);
		this._handlePasswordChangeValuesChanged = 
			this._handlePasswordChangeValuesChanged.bind(this);
		this._handlePasswordChangeRequested =
			this._handlePasswordChangeRequested.bind(this);
		this._handleBackRequested = 
			this._handleBackRequested.bind(this);
	}

	_handlePasswordChangeBoxInitialized() {
		this._log('Password change box initialized.');
	}

	_handlePasswordChangeBoxDisposed(values) {
		this._log('Password change box disposed.');
		this._log(values);
	}

	_handlePasswordChangeValuesChanged(oldValues, newValues) {
		this._log('Password change box values changed');
		this._log('Old values:');
		this._log(oldValues);
		this._log('New values:');
		this._log(newValues);
		this._evaluateNewPassword(newValues);
	}

	_evaluateNewPassword(newValues) {
		const result = evaluatePassword(newValues.newPassword);
		this.setState({
			newPasswordStrengthLevel: result.level,
			newPasswordRules: result.rules
		});
	}

	_handlePasswordChangeRequested(values) {
		this._log('Password change requested. Values are:');
		this._log(values);
		this._changePassword(values);
	}

	_changePassword(values) {
		this._setBusy(true);
		const passwordChangeService = new FakePasswordChangeService();
		passwordChangeService.changePassword(values, (resultMessage) => {
			this._setBusy(false);
			this._setPasswordChangeResult(resultMessage);
		});
	}

	_setBusy(isBusy) {
		this.setState({
			working: isBusy
		});
	}

	_setPasswordChangeResult(resultMessage) {
		this.setState({
			passwordChangeMessage: resultMessage
		});
	}

	_handleBackRequested(values) {
		this._log('Password change box back requested.');
		this._log(values);
	}

	_log(text) {
		if (typeof text != 'object') {
			console.log(text);
		} else {
			console.table(text);
		}
	}

	render() {
		const newPasswordRules = this.state.newPasswordRules;
		const newPasswordStrengthLevel = this.state.newPasswordStrengthLevel;
		const newPasswordStrengthText = newPasswordStrengthLevel != null 
			? newPasswordStrengthLevel.defaultLabel 
			: null;

		return (
			<div className="lvd-passwordchangebox-demo-container">
				<PasswordChangeBox 
					disabled={this.state.working}
					requireExistingPassword={true}

					messageProps={this.state.passwordChangeMessage}

					newPasswordProps={{
						passwordStrengthProps: {
							style: StrengthIndicatorStyles.intermittentBar,
							level: newPasswordStrengthLevel,
							text: newPasswordStrengthText
						},
						passwordRulesProps: {
							rules: newPasswordRules
						}
					}}

					backActionButtonProps={{
						position: BackButtonPositions.right
					}}

					onPasswordChangeValuesChanged={this._handlePasswordChangeValuesChanged}
					onPasswordChangedRequested={this._handlePasswordChangeRequested}
					onBackRequested={this._handleBackRequested}
					onPasswordChangeBoxInitialized={this._handlePasswordChangeBoxInitialized}
					onPasswordChangeBoxDisposed={this._handlePasswordChangeBoxDisposed}
				/>
			</div>
		);
	}
}