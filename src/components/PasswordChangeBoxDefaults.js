import BackButtonPositions from "./BackButtonPositions.js";

const PasswordChangeBoxDefaults = {
	title: 'Change password',

	existingPassword: {
		label: 'Current password:',
		placeholder: 'Please enter your current password',
		description: '',
		messages: {
			empty: 'You must fill in your current password'
		}
	},

	newPassword: {
		label: 'New password:',
		placeholder: 'Please enter your new password',
		description: '',
		messages: {
			empty: 'You must fill in your new password'
		}
	},

	confirmNewPassword: {
		label: 'Password confirmation:',
		placeholder: 'Please confirm new password',
		description: '',
		messages: {
			empty: 'You must confirm your new password',
			mismatch: 'The new password confirmation does not match the new password'
		}
	},

	passwordChangeButton: {
		label: 'Change password'
	},

	backActionButton: {
		show: true,
		label: 'Back',
		position: BackButtonPositions.left
	}
};

export default PasswordChangeBoxDefaults;