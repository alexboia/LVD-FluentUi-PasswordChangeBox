import * as React from 'react';
import { MessageBarType } from "@fluentui/react";

import {
	PasswordCallbackRule,
	PasswordRegexRule,
	PasswordEvaluator,
	PasswordLengthRule,

	PasswordStrengthIndicator,
	StrengthIndicatorStyles,
	PasswordStrengthLevels,
	
	getAllAvailableLevels,
	getAvailableLevelCount,
	IPasswordStrengthProps,
	IPasswordRulesProps
} from 'lvd-fluentui-passwordbox';

export {
	PasswordCallbackRule,
	PasswordRegexRule,
	PasswordEvaluator,
	PasswordLengthRule,

	PasswordStrengthIndicator,
	StrengthIndicatorStyles,
	PasswordStrengthLevels,
	
	getAllAvailableLevels,
	getAvailableLevelCount
};

export enum BackButtonPositions {
	left = 'left',
	right = 'right'
}

export enum PasswordChangeBoxMessageType {
	info = MessageBarType.info,
	error = MessageBarType.error,
	blocked = MessageBarType.blocked,
	severeWarning = MessageBarType.severeWarning,
	success = MessageBarType.success,
	warning = MessageBarType.warning
}

export interface IPasswordChangeBoxMessageProps {
	message?: string;
	type: PasswordChangeBoxMessageType;
}

export interface IPasswordChangeBoxTitleProps {
	show?: boolean;
	text?: string;
}

export interface IExistingPasswordProps {
	label?: string;
	placeholder?: string;
	description?: string;
	emptyErrorMessage?: string;
}

export interface INewPasswordProps {
	label?: string;
	placeholder?: string;
	description?: string;
	emptyErrorMessage?: string;
	passwordStrengthProps?: IPasswordStrengthProps;
	passwordRulesProps?: IPasswordRulesProps;
}

export interface IConfirmNewPasswordProps {
	label?: string;
	placeholder?: string;
	description?: string;
	emptyErrorMessage?: string;
	mismatchErrorMessage?: string;
}

export interface IPasswordChangeButtonProps {
	label?: string;
}

export interface IBackActionButtonProps {
	show?: boolean;
	label?: string;
	position?: BackButtonPositions;
}

export interface IPasswordChangeValues {
	existingPassword: string;
	newPassword: string;
	confirmNewPassword: string;
}

export interface IPasswordChangeBoxProps {
	disabled?: boolean;
	readOnly?: boolean;
	requireExistingPassword?: boolean;
	canReveal?: boolean;
	underlined?: boolean;

	messageProps?: IPasswordChangeBoxMessageProps;

	framed?: boolean;
	fixed?: boolean;
	centered?: boolean;
	className?: string;
	style?: React.CSSProperties;

	titleProps?: IPasswordChangeBoxTitleProps;
	existingPasswordProps?: IExistingPasswordProps;
	newPasswordProps?: INewPasswordProps;
	confirmNewPasswordProps?: IConfirmNewPasswordProps;
	passwordChangeButtonProps?: IPasswordChangeButtonProps;
	backActionButtonProps?: IBackActionButtonProps;

	onPasswordChangedRequested?: (values: IPasswordChangeValues) => void;
	onBackRequested?: (values: IPasswordChangeValues) => void;
	onPasswordChangeValuesChanged?: (oldValues: IPasswordChangeValues, newValues: IPasswordChangeValues) => void;
	onPasswordChangeBoxInitialized?: () => void;
	onPasswordChangeBoxDisposed?: (values: IPasswordChangeValues) => void;
}

export declare class PasswordChangeBox extends React.Component<IPasswordChangeBoxProps, {}> {
	constructor(props: IPasswordChangeBoxProps);
	render(): JSX.Element;
}

export declare function successMessage(message: string): IPasswordChangeBoxMessageProps;
export declare function errorMessage(message: string): IPasswordChangeBoxMessageProps;
export declare function warningMessage(message: string): IPasswordChangeBoxMessageProps;
export declare function infoMessage(message: string): IPasswordChangeBoxMessageProps;