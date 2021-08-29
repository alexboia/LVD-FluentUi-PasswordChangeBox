# LVD-FluentUi-PasswordChangeBox

*Background music: [Gary Moore - The Loner - Live at Hammersmith Odeon](https://www.youtube.com/watch?v=dAHOLlLBoUA)*.

A ReactJS password change box built using the [FluentUI library](https://github.com/microsoft/fluentui).
It features a basic structure with some options to customize the overall structure and layout:

- one can opt to also require that the user enter the existing password;
- one can opt between a couple of layout variations: fixed or fluid, framed (that is, within a rectangle drawn using a discrete shadow) or un-framed and center or un-centered.

Here's a screenshot of how it all looks like [using the default styling](https://github.com/alexboia/LVD-FluentUi-PasswordChangeBox/blob/main/src/css/components/password-change-box.css):

<p align="left">
	<img align="center" src="https://raw.githubusercontent.com/alexboia/LVD-FluentUi-PasswordChangeBox/main/docs/Sample.png" style="margin-bottom: 20px; margin-right: 20px; border-radius: 5px;" />
</p>

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

class PasswordChangeBox extends React.Component {
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

## Customization Options
<a name="pcb-customization"></a>

| What | Prop Name | Type | Notes |
| --- | --- | --- | --- |

## Password Change Values Object
<a name="pcb-values"></a>

The password change values are exported as a plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `existingPassword` | `string` | Set to `null` if the existing password is not, by configuration, required |
| `newPassword` | `string` | - |
| `confirmNewPassword` | `string` | - |

## Changelog
<a name="pcb-changelog"></a>

### Version 0.0.1

- First tracked version.

## Donate
<a name="pcb-donate"></a>

I put some of my free time into developing and maintaining this plugin.
If helped you in your projects and you are happy with it, you can...

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q01KGLM)