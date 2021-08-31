# LVD-FluentUi-PasswordChangeBox

*Background music: [Gary Moore - The Loner - Live at Hammersmith Odeon](https://www.youtube.com/watch?v=dAHOLlLBoUA)*.

[![NPM](https://nodei.co/npm/lvd-fluentui-passwordchangebox.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/lvd-fluentui-passwordchangebox/)

A ReactJS password change box built using the [FluentUI library](https://github.com/microsoft/fluentui).
It features a basic structure with some options to customize the overall structure and layout:

- one can opt to also require that the user enter the existing password;
- one can opt between a couple of layout variations: fixed or fluid, framed (that is, within a rectangle drawn using a discrete shadow) or un-framed and center or un-centered.

Here's a screenshot of how it all looks like [using the default styling](https://github.com/alexboia/LVD-FluentUi-PasswordChangeBox/blob/main/src/css/components/password-change-box.css):

<p align="left">
	<img align="center" src="https://raw.githubusercontent.com/alexboia/LVD-FluentUi-PasswordChangeBox/main/docs/Sample.png" style="margin-bottom: 20px; margin-right: 20px; border-radius: 5px;" />
</p>

## Contents
1. [Installation](#pcb-installation)
2. [Demo](#pcb-demo)
3. [Basic Usage](#pcb-basic-usage)
4. [Styling](#pcb-styling)
5. [Building](#pcb-building)
6. [Customization Options](#pcb-customization)
7. [Events](#pcb-events)
8. [Changelog](#pcb-changelog)
9. [Donate](#pcb-donate)

## Installation
<a name="pcb-installation"></a>

`npm install --save lvd-fluentui-passwordchangebox`

## Demo
<a name="pcb-demo"></a>

The `demo` directory contains [a compiled and ready-to-run example](https://github.com/alexboia/LVD-FluentUi-PasswordChangeBox/tree/main/demo). Just open up the `index.html` file.

## Basic Usage
<a name="pcb-basic-usage"></a>

```javascript
import React from 'react';
import { PasswordChangeBox } from 'lvd-fluentui-passwordchangebox';

class PasswordChangeBoxPage extends React.Component {
	constructor(props) {
		super(props);

		this._handlePasswordChangeValuesChanged = 
			this._handlePasswordChangeValuesChanged.bind(this);
		this._handlePasswordChangeRequested = 
			this._handlePasswordChangeRequested.bind(this);
		this._handleBackRequested = 
			this._handleBackRequested.bind(this);
	}

	_handlePasswordChangeValuesChanged(oldValues, newValues) {
		//do something, if desired
	}

	_handlePasswordChangeRequested(values) {
		//save new password
	}

	_handleBackRequested(values) {
		//navigate to wherever the user initially came from
	}

	render() {
		return (
			<PasswordChangeBox 
				onPasswordChangeValuesChanged={this._handlePasswordChangeValuesChanged}
				onPasswordChangedRequested={this._handlePasswordChangeRequested}
				onBackRequested={this._handleBackRequested}
			/>
		);
	}
}
```

## Styling
<a name="pcb-styling"></a>

You can either directly include the `dist/style.css` into your `html` web page or use the `@import` directive inside your stylesheet if building using webpack:

```css
@import '~lvd-fluentui-passwordchangebox/dist/style.css';
```

Also see [the component itself](https://github.com/alexboia/LVD-FluentUi-PasswordChangeBox/blob/main/src/components/PasswordChangeBox.jsx).

## Building
<a name="pcb-building"></a>

To build the demo application: 

```
npm run build-app
```

To build the library: 

```
npm run build-dist
```

To build both in one sitting: 

```
npm run build
```

## Forwarded APIs

For convenience, the following APIs are forwarded from the underlying [password box component](https://github.com/alexboia/LVD-FluentUi-PasswordBox):

- PasswordCallbackRule,
- PasswordRegexRule,
- PasswordEvaluator,
- PasswordLengthRule,

- PasswordStrengthIndicator,
- StrengthIndicatorStyles,
- PasswordStrengthLevels,

- getAllAvailableLevels,
- getAvailableLevelCount.

## Customization Options
<a name="pcb-customization"></a>

| What | Prop Name | Type | Notes |
| --- | --- | --- | --- |
| Disable component | `disabled` | `boolean` | Cascades to all fields and buttons. Defaults to `false`. |
| Configure whether to use framed container layout or not | `framed` | `boolean` | If true, it will display the default shadow-box frame. Defaults to `true`. |
| Configure whether to use built-in fixed-width container layout or not | `fixed` | `boolean` | If true, it will set the container width to the default width of `500px`. Defaults to `true`. |
| Configure whether to center the container or not | `centered` | `boolean` | If true, it will attempt to center the container. Defaults to `true`. |
| Set additional container css class name | `className` | `string` | Defaults to `null`. |
| Set additional inline css style properties | `style` | `object` | Key-value plain javascript object. Defaults to `{}`. |
| Make component readonly | `readOnly` | `boolean` | Cascades to all fields. Defaults to `false`. |
| Display fields in underlined style. | `underlined` | `boolean` | Defaults to `false`. |
| Allow user to reveal password | `canReveal` | `boolean` | Defaults to `true` |
| Whether or not to require existing password | `requireExistingPassword` | `boolean` | Defaults to `true` |
| Component title | `titleProps` | `Title Customization Object` | See below. |
| Message | `messageProps` | `Message Object` | See below. By default no message is shown. |
| Customize the existing password field | `existingPasswordProps` | `Existing Password Customization Object` | Only used when `requireExistingPassword={true}`. See below. |
| Customize the new password field | `newPasswordProps` | `New Password Customization Object` | See below. |
| Customize the password confirmation field | `confirmNewPasswordProps` | `Confirm New Password Customization Object` | See below. |
| Customize change password button | `passwordChangeButtonProps` | `Change Password Button Customization Object` | See below. |
| Customize the back button | `backActionButtonProps` | `Back Button Customization Object` | See below. |

### Title Customization Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `show` | `boolean` | Defaults to `true` if not specified.  |
| `text` | `string` | Defaults to `Change password` if not specified or empty.  |

Example:

```javascript
<PasswordChangeBox 
	...
	titleProps={{
		show: true,
		text: "Time to change your password. Make it count!"
	}}
	...
/>
```

### Message Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `message` | `string` | The actual message to be displayed. Defaults to `null` if not specified.  |
| `type` | `PasswordChangeBoxMessageType` | Type of message - used for formatting (error, warning etc.). Defaults to `null` if not specified. See [here for all supported values](https://github.com/alexboia/LVD-FluentUi-PasswordChangeBox/blob/main/src/components/PasswordChangeBoxMessageType.js). |

Example:

```javascript
<PasswordChangeBox 
	...
	messageProps={{
		message: "The existing password you entered was invalid",
		type: PasswordChangeBoxMessageType.error
	}}
	...
/>
```

### Existing Password Customization Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Field label. Defaults to `Current password:`. |
| `placeholder` | `string` | Field placeholder. Defaults to `Please enter your current password`. |
| `description` | `string` | Field descriptive text, displayed below the field. Defaults to empty string. |
| `emptyErrorMessage` | `string` | Error message displayed when the field is left empty. Defaults to `You must fill in your current password`. |

Example:

```javascript
<PasswordChangeBox 
	...
	existingPasswordProps={{
		label: 'Existing password:',
		placeholder: 'Please enter your existing password',
		emptyErrorMessage: 'You must fill in your existing password'
	}}
	...
/>
```

### New Password Customization Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Field label. Defaults to `New password:`. |
| `placeholder` | `string` | Field placeholder. Defaults to `Please enter your new password`. |
| `description` | `string` | Field descriptive text, displayed below the field. Defaults to empty string. |
| `emptyErrorMessage` | `string` | Error message displayed when the field is left empty. Defaults to `You must fill in your new password`. |
| `passwordStrengthProps` | `Password Strength Object` | See [here](https://github.com/alexboia/LVD-FluentUi-PasswordBox). |
| `passwordRulesProps` | `Password Rules Information Object` | See [here](https://github.com/alexboia/LVD-FluentUi-PasswordBox). |

Example:

```javascript
<PasswordChangeBox 
	...
	newPasswordProps={{
		label: 'Brand new password:',
		placeholder: 'Please enter your brand new password',
		emptyErrorMessage: 'You must fill in your brand new password',
		passwordStrengthProps: {
			/* password strength configuration */
		},
		passwordRulesProps: {
			rules: [/* some password rules */]
		}
	}}
	...
/>
```

### Confirm New Password Customization Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Field label. Defaults to `Password confirmation:`. |
| `placeholder` | `string` | Field placeholder. Defaults to `Please confirm new password`. |
| `description` | `string` | Field descriptive text, displayed below the field. Defaults to empty string. |
| `emptyErrorMessage` | `string` | Error message displayed when the field is left empty. Defaults to `You must confirm your new password`. |
| `mismatchErrorMessage` | `string` | Error message displayed when the value of this field does not match the value of the new password field. That is, when the new password and its confirmation are not the same. Defaults to `The new password confirmation does not match the new password`. |

Example:

```javascript
<PasswordChangeBox 
	...
	confirmNewPasswordProps={{
		description: 'Becasue, let us face it, we have all been there: all new password, but immediately forgotten!'
	}}
	...
/>
```

### Change Password Button Customization Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Defaults to `Change password`. |

Example:

```javascript
<PasswordChangeBox 
	...
	passwordChangeButtonProps={{
		label: 'Submit new password'
	}}
	...
/>
```

### Back Button Customization Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Defaults to `Change password`. |
| `show` | `boolean` | Whether to show the button or not. Defaults to `true`. |
| `position` | `BackButtonPositions` | Defaults to `BackButtonPositions.left`. |

Example:

```javascript
<PasswordChangeBox 
	...
	backActionButtonProps={{
		label: 'Back to log-in',
		show: true,
		//align back button to the far-right of the container
		position: BackButtonPositions.right 
	}}
	...
/>
```

## Password Change Values Object
<a name="pcb-values"></a>

The password change values are exported as a plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `existingPassword` | `string` | Set to `null` if the existing password is not, by configuration, required |
| `newPassword` | `string` | - |
| `confirmNewPassword` | `string` | - |

## Events
<a name="pcb-events"></a>

| Event | Prop Name | Arguments | Notes |
| --- | --- | --- | --- |
| Password change requested | `onPasswordChangedRequested` | (`Password Change Values Object`) | Triggered when the `Change password` button is clicked. |
| Values changed | `onPasswordChangeValuesChanged` | (`oldValues`:`Password Change Values Object`, `newValues`:`Password Change Values Object`) | Triggered whenever any field changes. |
| Navigate back | `onBackRequested` | (`Password Change Values Object`) | Triggered when the `Back` button is clicked. |
| Component initialized | `onPasswordChangeBoxInitialized` | (`none`) | Triggered when the component is mounted by `React`. |
| Component disposed | `onPasswordChangeBoxDisposed` | (`Password Change Values Object`) | Triggered when the component is un-mounted by `React`. |

## Changelog
<a name="pcb-changelog"></a>

### Version 0.0.3

- Forwarded underlying password box public APIs, without the password box component itself.

### Version 0.0.2

- Minor styling update.

### Version 0.0.1

- First tracked version.

## Donate
<a name="pcb-donate"></a>

I put some of my free time into developing and maintaining this plugin.
If helped you in your projects and you are happy with it, you can...

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q01KGLM)