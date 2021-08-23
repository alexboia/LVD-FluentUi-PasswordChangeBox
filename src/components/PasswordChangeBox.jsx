import React from 'react';
import PropTypes from 'prop-types';

import { TextField, PrimaryButton, DefaultButton } from '@fluentui/react';
import { PasswordBox } from 'lvd-fluentui-passwordbox';

import PasswordChangeBoxDefaults from './PasswordChangeBoxDefaults.js';

export default class PasswordChangeBox extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className={this._computeContainerCssClass()}>
				{this._renderTitle()}

				<div className="lvd-passwordchange-box-fields-container">
					{this._renderExistingPasswordInputField()}
					{this._renderMainPasswordInputField()}
					{this._renderPasswordConfirmationField()}
				</div>
				<div className="lvd-passwordchange-box-button-container">
					{this._renderPasswordChangeActionButton()}
					{this._renderBackActionButtonButton()}
				</div>
			</div>
		);
	}

	_computeContainerCssClass() {
		let className = 'lvd-passwordchange-box';

		if (this._useFramedLayout()) {
			className = `${className} lvd-passwordchange-box-framed`;
		}

		return className;
	}

	_useFramedLayout() {
		return this.props.hasOwnProperty('framed')
			? !!this.props.framed
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

	_renderExistingPasswordInputField() {
		if (this._isExistingPasswordRequired()) {
			const existingPasswordElement = (
				<TextField 
					type="password"
					label="Current password:"
					placeholder="Please enter your current password"
					canRevealPassword={this._canReveal()}
					required={true}
				/>
			);

			return this._renderField(existingPasswordElement);
		} else {
			return null;
		}
	}

	_canReveal() {
		return this.props.hasOwnProperty('canReveal')
			? !!this.props.canReveal
			: true;
	}

	_renderField(element) {
		return (
			<div className="lvd-passwordchange-box-field">{element}</div>
		);
	}

	_isExistingPasswordRequired() {
		return !!this.props.requireExistingPassword;
	}

	_renderMainPasswordInputField() {
		const newPasswordElement = (
			<PasswordBox 
				label="New password:"
				placeholder="Please enter your new password"
				canReveal={this._canReveal()}
				required={true}
			/>
		);

		return this._renderField(newPasswordElement);
	}

	_renderPasswordConfirmationField() {
		const passwordConfirmationElement = (
			<TextField 
				type="password"
				label="Password confirmation:"
				placeholder="Please confirm new password"
				canRevealPassword={this._canReveal()}
				required={true}
			/>
		);

		return this._renderField(passwordConfirmationElement);
	}

	_renderPasswordChangeActionButton() {
		const enableSubmit = true;
		const passwordChangeButtonProps = this._getPasswordChangeActionButtonProps();

		return (
			<PrimaryButton
				disabled={!enableSubmit}
				className="lvd-passwordchange-box-btn lvd-passwordchange-box-passwordchange-btn"
				text={passwordChangeButtonProps.label} 
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
		const backActionButtonprops = this._getBackActionButtonProps();
		return backActionButtonprops.show && (
			<DefaultButton primary={false}
				className="lvd-passwordchange-box-btn lvd-passwordchange-box-back-btn"
				text={backActionButtonprops.label} 
				disabled={false}
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
				|| PasswordChangeBoxDefaults.backActionButton.label
		};
	}
}

PasswordChangeBox.propTypes = {
	framed: PropTypes.bool,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	requireExistingPassword: PropTypes.bool,
	canReveal: PropTypes.bool,
	underlined: PropTypes.bool,

	titleProps: PropTypes.object,
	passwordChangeButtonProps: PropTypes.object,
	backActionButtonProps: PropTypes.object,

	onPasswordChangeValuesChanged: PropTypes.func,
	onPasswordChangeBoxInitialized: PropTypes.func,
	onPasswordChangeBoxDisposed: PropTypes.func
};