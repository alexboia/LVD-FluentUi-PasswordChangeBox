import { successMessage, errorMessage } from './components/PasswordChangeBoxUtility.js';

export default class FakePasswordChangeService {
	constructor(config = null) {
		this._config = this._mergeConfig(config || {});
	}

	_mergeConfig(config) {
		return Object.assign(this._getDefaultConfig(), config);
	}

	_getDefaultConfig() {
		return {
			requireExistingPassword: true,
			correctExistingPassword: 'test_existing'
		};
	}

	changePassword(values, onReady) {
		this._emulateServerProcessing(() => {
			let result = null;

			if (this._isExistingPasswordCorrect(values.existingPassword)) {
				if (!this._newPasswordMatchesConfirmation(values.newPassword, values.confirmNewPassword)) {
					result = errorMessage('The new password does not match its confirmation.');
				} else {
					result = successMessage('The password has been successfully changed.')
				}
			} else {
				result = errorMessage('Existing password is incorrect.');
			}

			onReady(result);
		});
	}

	_emulateServerProcessing(onReady) {
		const timeout = this._generateTimeout();
		window.setTimeout(onReady, timeout);
	}

	_generateTimeout() {
		return Math.max(Math.random() * 1000, 250);
	}

	_isExistingPasswordCorrect(currentPassword) {
		return !this._config.requireExistingPassword 
			|| currentPassword == this._config.correctExistingPassword;
	}

	_newPasswordMatchesConfirmation(newPassword, confirmNewPassword) {
		return !!newPassword && newPassword == confirmNewPassword;
	}
}