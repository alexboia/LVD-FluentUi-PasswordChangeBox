import { MessageBarType } from "@fluentui/react";
import PasswordChangeBoxMessageType from "./PasswordChangeBoxMessageType.js";

const messageTypeMapping = {
	[PasswordChangeBoxMessageType.info]: MessageBarType.info,
	[PasswordChangeBoxMessageType.error]: MessageBarType.error,
	[PasswordChangeBoxMessageType.warning]: MessageBarType.warning,
	[PasswordChangeBoxMessageType.severeWarning]: MessageBarType.severeWarning,
	[PasswordChangeBoxMessageType.success]: MessageBarType.success,
	[PasswordChangeBoxMessageType.blocked]: MessageBarType.blocked
};

export function passwordChangeBoxMessageTypeToOfficeUiMessageType(passwordChangeBoxMessageType) {
	let officeUiMessageType = null;
	if (!!passwordChangeBoxMessageType && messageTypeMapping.hasOwnProperty(passwordChangeBoxMessageType)) {
		officeUiMessageType = messageTypeMapping[passwordChangeBoxMessageType];
	}
	return officeUiMessageType;
}

export function successMessage(message) {
	return {
		type: PasswordChangeBoxMessageType.success,
		message: message
	};
}

export function errorMessage(message) {
	return {
		type: PasswordChangeBoxMessageType.error,
		message: message
	};
}

export function warningMessage(message) {
	return {
		type: PasswordChangeBoxMessageType.warning,
		message: message
	};
}

export function infoMessage(message) {
	return {
		type: PasswordChangeBoxMessageType.info,
		message: message
	};
}