import React from 'react';
import PropTypes from 'prop-types';

import { MessageBar } from '@fluentui/react';
import { TextField, PrimaryButton, DefaultButton } from '@fluentui/react';
import { PasswordBox } from 'lvd-fluentui-passwordbox';

import { passwordChangeBoxMessageTypeToOfficeUiMessageType } from './PasswordChangeBoxUtility.js'
import PasswordChangeBoxDefaults from './PasswordChangeBoxDefaults.js';
import BackButtonPositions from './BackButtonPositions.js';

export default class PasswordChangeBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			existingPassword: null,
			newPassword: null,
			confirmNewPassword: null,
			hasInteracted: false
		};

		this._handleExistingPasswordChanged =
			this._handleExistingPasswordChanged.bind(this);
		this._handleNewPasswordChanged = 
			this._handleNewPasswordChanged.bind(this);
		this._handleConfirmNewPasswordChanged = 
			this._handleConfirmNewPasswordChanged.bind(this);
		this._handleChangePasswordButtonClicked = 
			this._handleChangePasswordButtonClicked.bind(this);
		this._handleBackButtonClicked = 
			this._handleBackButtonClicked.bind(this);

		this._getExistingPasswordFieldErrorMessage =
			this._getExistingPasswordFieldErrorMessage.bind(this);
		this._getNewPasswordErrorMessage = 
			this._getNewPasswordErrorMessage.bind(this);
		this._getConfirmNewPasswordErrorMessage = 
			this._getConfirmNewPasswordErrorMessage.bind(this);
	}

	_isFormValid() {
		const formValues = this._getFormValues();
		const existingValuesRequired = this._isExistingPasswordRequired();

		return (!existingValuesRequired || !!formValues.existingPassword)
			&& !!formValues.newPassword 
			&& !!formValues.confirmNewPassword
			&& (formValues.newPassword == formValues.confirmNewPassword);
	}

	_getFormValues() {
		return {
			existingPassword: this.state.existingPassword,
			newPassword: this.state.newPassword,
			confirmNewPassword: this.state.confirmNewPassword
		};
	}

	_handleExistingPasswordChanged(event) {
		event.preventDefault();
		const oldValues = this._getFormValues();

		this.setState({
			existingPassword: event.target.value,
			hasInteracted: true
		}, () => this._raiseValuesChanged(oldValues));
	}

	_raiseValuesChanged(oldValues) {
		const newValues = this._getFormValues();
		if (this.props.onPasswordChangeValuesChanged != null) {
			this.props.onPasswordChangeValuesChanged(oldValues, newValues);
		}
	}

	_handleNewPasswordChanged(oldValue, newValue) {
		const oldValues = this._getFormValues();
		this.setState({
			newPassword: newValue,
			confirmNewPassword: '',
			hasInteracted: true
		}, () => this._raiseValuesChanged(oldValues));
	}

	_handleConfirmNewPasswordChanged(event) {
		event.preventDefault();
		const oldValues = this._getFormValues();

		this.setState({
			confirmNewPassword: event.target.value,
			hasInteracted: true
		}, () => this._raiseValuesChanged(oldValues));
	}

	_handleChangePasswordButtonClicked(event) {
		event.preventDefault();
		const values = this._getFormValues();

		if (this.props.onPasswordChangedRequested != null) {
			this.props.onPasswordChangedRequested(values);
		}
	}

	_handleBackButtonClicked(event) {
		event.preventDefault();
		const values = this._getFormValues();

		if (this.props.onBackRequested != null) {
			this.props.onBackRequested(values);
		}
	}
	
	render() {
		return (
			<div className={this._computeContainerCssClassName()}>
				{this._renderTitle()}

				<div className="lvd-passwordchange-box-fields-container">
					{this._renderMessage()}
					{this._renderExistingPasswordInputField()}
					{this._renderNewPasswordInputField()}
					{this._renderPasswordConfirmationField()}
				</div>
				<div className="lvd-passwordchange-box-button-container">
					{this._renderPasswordChangeActionButton()}
					{this._renderBackActionButtonButton()}
					<div className="lvd-passwordchange-box-clear"></div>
				</div>
			</div>
		);
	}

	_computeContainerCssClassName() {
		let className = ['lvd-passwordchange-box'];

		if (this._useFramedLayout()) {
			className.push('lvd-passwordchange-box-framed');
		}

		if (this._useFixedLayout()) {
			className.push('lvd-passwordchange-box-fixed');
		}

		if (this._useCenteredLayout()) {
			className.push('lvd-passwordchange-box-centered');
		}

		return className.join(' ');
	}

	_useFramedLayout() {
		return this.props.hasOwnProperty('framed')
			? !!this.props.framed
			: true;
	}

	_useFixedLayout() {
		return this.props.hasOwnProperty('fixed')
			? !!this.props.fixed
			: true;
	}

	_useCenteredLayout() {
		return this.props.hasOwnProperty('centered')
			? !!this.props.centered
			: true;
	}

	_renderTitle() {
		const titleProps = this._getTitleProps();
		return titleProps.show && (
			<h4 className="lvd-passwordchange-box-header">
				{titleProps.text}
			</h4>
		);
	}

	_getTitleProps() {
		const titleProps = this.props.titleProps || {};
		return {
			show: titleProps.hasOwnProperty('show') 
				? !!titleProps.show 
				: true,
			text: titleProps.text 
				|| PasswordChangeBoxDefaults.title
		};
	}

	_renderMessage() {
		const messageProps = this._getMessageProps();
		return !!messageProps.message && (
			<MessageBar
				className="lvd-passwordchange-box-message"
				messageBarType={messageProps.type}
				isMultiline={true}>
				{messageProps.message}
			</MessageBar>
		);
	}

	_getMessageProps() {
		const messageProps = this.props.messageProps || {};
		const messageType = passwordChangeBoxMessageTypeToOfficeUiMessageType(messageProps.type || null);

		return {
			message: messageProps.message || null,
			type: messageType 
		};
	}

	_renderExistingPasswordInputField() {
		if (this._isExistingPasswordRequired()) {
			const existingPasswordProps = this._getExistingPasswordProps();
			const existingPasswordElement = (
				<TextField 
					type="password"
					value={this.state.existingPassword}
					label={existingPasswordProps.label}
					placeholder={existingPasswordProps.placeholder}
					description={existingPasswordProps.description}
					canRevealPassword={this._canReveal()}
					disabled={this._isDisabled()}
					readOnly={this._isReadOnly()}
					underlined={this._isUnderlined()}
					onChange={this._handleExistingPasswordChanged}
					onGetErrorMessage={this._getExistingPasswordFieldErrorMessage}
					autoComplete="off"
					required={true}
				/>
			);

			return this._renderField(existingPasswordElement);
		} else {
			return null;
		}
	}

	_getExistingPasswordProps() {
		const existingPasswordProps = this.props.existingPasswordProps || {};
		return {
			label: existingPasswordProps.label 
				|| PasswordChangeBoxDefaults.existingPassword.label,
			placeholder: existingPasswordProps.hasOwnProperty('placeholder')
				? existingPasswordProps.placeholder || null
				: PasswordChangeBoxDefaults.existingPassword.placeholder,
			description: existingPasswordProps.description
				|| PasswordChangeBoxDefaults.existingPassword.description,
			emptyErrorMessage: existingPasswordProps.emptyErrorMessage
				|| PasswordChangeBoxDefaults.existingPassword.messages.empty
		};
	}

	_getExistingPasswordFieldErrorMessage(value) {
		const existingPasswordProps = this._getExistingPasswordProps();
		return this._displayExistingPasswordEmptyErrorMessage(value)
			? existingPasswordProps.emptyErrorMessage
			: '';
	}

	_displayExistingPasswordEmptyErrorMessage(value) {
		return !this._isExistingPasswordFilledIn(value)
			&& this._displayFieldErrorMessages();
	}

	_isExistingPasswordFilledIn(existingPassword) {
		return this._isValueFilledIn(existingPassword);
	}

	_isValueFilledIn(value) {
		return (value != null && value.length > 0);
	}

	_displayFieldErrorMessages() {
		return !!this.state.hasInteracted;
	}

	_canReveal() {
		return this.props.hasOwnProperty('canReveal')
			? !!this.props.canReveal
			: true;
	}

	_isDisabled() {
		return !!this.props.disabled;
	}

	_isReadOnly() {
		return !!this.props.readOnly;
	}

	_isUnderlined() {
		return !!this.props.underlined;
	}

	_renderField(element) {
		return (
			<div className="lvd-passwordchange-box-field">{element}</div>
		);
	}

	_isExistingPasswordRequired() {
		return !!this.props.requireExistingPassword;
	}

	_renderNewPasswordInputField() {
		const newPasswordProps = this._getNewPasswordProps();
		const newPasswordElement = (
			<PasswordBox 
				label={newPasswordProps.label}
				value={this.state.newPassword}
				placeholder={newPasswordProps.placeholder}
				description={newPasswordProps.description}
				canReveal={this._canReveal()}
				disabled={this._isDisabled()}
				readOnly={this._isReadOnly()}
				underlined={this._isUnderlined()}
				onPasswordChanged={this._handleNewPasswordChanged}
				onGetErrorMessage={this._getNewPasswordErrorMessage}
				passwordStrengthProps={newPasswordProps.passwordStrengthProps}
				passwordRulesProps={newPasswordProps.passwordRulesProps}
				required={true}
			/>
		);

		return this._renderField(newPasswordElement);
	}

	_getNewPasswordProps() {
		const newPasswordProps = this.props.newPasswordProps || {};
		return {
			label: newPasswordProps.label 
				|| PasswordChangeBoxDefaults.newPassword.label,
			placeholder: newPasswordProps.hasOwnProperty('placeholder')
				? newPasswordProps.placeholder || null
				: PasswordChangeBoxDefaults.newPassword.placeholder,
			description: newPasswordProps.description 
				|| PasswordChangeBoxDefaults.newPassword.description,
			emptyErrorMessage: newPasswordProps.emptyErrorMessage
				|| PasswordChangeBoxDefaults.newPassword.messages.empty,
			passwordStrengthProps: newPasswordProps.passwordStrengthProps 
				|| null,
			passwordRulesProps: newPasswordProps.passwordRulesProps 
				|| null
		};
	}

	_getNewPasswordErrorMessage(value) {
		const newPasswordProps = this._getNewPasswordProps();
		return this._displayNewPasswordEmptyErrorMessage(value)
			? newPasswordProps.emptyErrorMessage
			: '';
	}

	_displayNewPasswordEmptyErrorMessage(value) {
		return !this._isNewPasswordFilledIn(value)
			&& this._displayFieldErrorMessages();
	}

	_isNewPasswordFilledIn(newPassword) {
		return this._isValueFilledIn(newPassword);
	}

	_renderPasswordConfirmationField() {
		const confirmNewPasswordProps = this._getConfirmNewPasswordProps();
		const passwordConfirmationElement = (
			<TextField 
				type="password"
				value={this.state.confirmNewPassword}
				label={confirmNewPasswordProps.label}
				placeholder={confirmNewPasswordProps.placeholder}
				description={confirmNewPasswordProps.description}
				canRevealPassword={this._canReveal()}
				disabled={this._isDisabled()}
				readOnly={this._isReadOnly()}
				underlined={this._isUnderlined()}
				onChange={this._handleConfirmNewPasswordChanged}
				onGetErrorMessage={this._getConfirmNewPasswordErrorMessage}
				required={true}
				autoComplete="off"
			/>
		);

		return this._renderField(passwordConfirmationElement);
	}

	_getConfirmNewPasswordProps() {
		const confirmNewPasswordProps = this.props.confirmNewPasswordProps || {};
		return {
			label: confirmNewPasswordProps.label 
				|| PasswordChangeBoxDefaults.confirmNewPassword.label,
			placeholder: confirmNewPasswordProps.hasOwnProperty('placeholder')
				? confirmNewPasswordProps.placeholder || null
				: PasswordChangeBoxDefaults.confirmNewPassword.placeholder,
			description: confirmNewPasswordProps.description
				|| PasswordChangeBoxDefaults.confirmNewPassword.description,
			emptyErrorMessage: confirmNewPasswordProps.emptyErrorMessage
				|| PasswordChangeBoxDefaults.confirmNewPassword.messages.empty,
			mismatchErrorMessage: confirmNewPasswordProps.mismatchErrorMessage
				|| PasswordChangeBoxDefaults.confirmNewPassword.messages.mismatch
		};
	}

	_getConfirmNewPasswordErrorMessage(value) {
		let errorMessage = '';
		const confirmNewPasswordProps = this._getConfirmNewPasswordProps();
		
		if (this._displayFieldErrorMessages()) {
			if (this._isConfirmNewPasswordFilledIn(value)) {
				errorMessage = !this._confirmNewPasswordMatchesNewPassword(value)
					? confirmNewPasswordProps.mismatchErrorMessage
					: '' 
			} else {
				errorMessage = confirmNewPasswordProps.emptyErrorMessage;
			}
		}

		return errorMessage;
	}

	_isConfirmNewPasswordFilledIn(confirmNewPassword) {
		return this._isValueFilledIn(confirmNewPassword);
	}

	_confirmNewPasswordMatchesNewPassword(confirmNewPassword) {
		return confirmNewPassword == this.state.newPassword;
	}

	_renderPasswordChangeActionButton() {
		const enableSubmit = this._isFormValid() && !this._isDisabled();
		const passwordChangeButtonProps = this._getPasswordChangeActionButtonProps();

		return (
			<PrimaryButton
				disabled={!enableSubmit}
				className="lvd-passwordchange-box-btn lvd-passwordchange-box-passwordchange-btn"
				text={passwordChangeButtonProps.label} 
				onClick={this._handleChangePasswordButtonClicked}
			/>
		);
	}

	_getPasswordChangeActionButtonProps() {
		const passwordChangeButtonProps = this.props.passwordChangeButtonProps || {};
		return {
			label: passwordChangeButtonProps.label 
				|| PasswordChangeBoxDefaults.passwordChangeButton.label
		}
	}

	_renderBackActionButtonButton() {
		const backActionButtonProps = this._getBackActionButtonProps();

		return backActionButtonProps.show && (
			<DefaultButton primary={false}
				className={this._computeBackActionButtonCssClassName(backActionButtonProps)}
				text={backActionButtonProps.label} 
				disabled={this._isDisabled()}
				onClick={this._handleBackButtonClicked}
			/>
		);
	}

	_getBackActionButtonProps() {
		const backActionButtonProps = this.props.backActionButtonProps || {};
		return {
			show: backActionButtonProps.hasOwnProperty('show')
				? !!backActionButtonProps.show
				: true,
			label: backActionButtonProps.label 
				|| PasswordChangeBoxDefaults.backActionButton.label,
			position: backActionButtonProps.position
				|| PasswordChangeBoxDefaults.backActionButton.position
		};
	}

	_computeBackActionButtonCssClassName(backActionButtonProps) {
		let positionClassName = 'lvd-passwordchange-box-back-btn-left';
		const baseClassName = 'lvd-passwordchange-box-btn lvd-passwordchange-box-back-btn';
		
		if (backActionButtonProps.position == BackButtonPositions.right) { 
			positionClassName = 'lvd-passwordchange-box-back-btn-right';
		}

		return `${baseClassName} ${positionClassName}`;
	}
}

PasswordChangeBox.propTypes = {
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	requireExistingPassword: PropTypes.bool,
	canReveal: PropTypes.bool,
	underlined: PropTypes.bool,

	framed: PropTypes.bool,
	fixed: PropTypes.bool,
	centered: PropTypes.bool,

	titleProps: PropTypes.object,
	existingPasswordProps: PropTypes.object,
	newPasswordProps: PropTypes.object,
	confirmNewPasswordProps: PropTypes.object,
	passwordChangeButtonProps: PropTypes.object,
	backActionButtonProps: PropTypes.object,

	onPasswordChangedRequested: PropTypes.func,
	onBackRequested: PropTypes.func,
	onPasswordChangeValuesChanged: PropTypes.func,
	onPasswordChangeBoxInitialized: PropTypes.func,
	onPasswordChangeBoxDisposed: PropTypes.func
};