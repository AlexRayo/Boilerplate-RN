import React from "react";
import styles from '../../styles/Styles';
import { TextInput } from 'react-native-paper';

type propsType = {
	value: string,
	keyboardType?: 'default' |
	'number-pad' |
	'decimal-pad' |
	'numeric' |
	'email-address' |
	'phone-pad' |
	'ascii-capable' |
	'numbers-and-punctuation' |
	'url' |
	'name-phone-pad' |
	'twitter' |
	'web-search',
	maxLength: number,
	label: string,
	placeholder: string,
	onChangeText?: () => void,
	multiline?: boolean,
	type?: 'password' | 'search' | 'text' | undefined,
	onPressIcon?: () => void,
	disabled?: boolean,
	style?: []
}
//This input component works for 3 types: text, password and search
const TxtInput = ({ value, keyboardType, maxLength, label, placeholder, onChangeText, multiline, type, onPressIcon, disabled, style }: propsType) => {

	//use "isInputPass = {true}" as prop when InputText needs to be password type
	//useState when isInputPass
	const [isSecureEntry, setIsSecureEntry] = React.useState(type === 'password' ? true : false)

	return (
		<TextInput
			style={[style]}
			placeholder={placeholder}
			label={label}
			value={value}
			maxLength={maxLength === undefined ? 256 : maxLength}
			secureTextEntry={isSecureEntry}
			keyboardType={keyboardType === undefined ? 'default' : keyboardType}
			multiline={multiline === undefined ? false : multiline}
			onChangeText={onChangeText}
			disabled={disabled}

			right={
				//Add icon or not depending on the input type
				type === 'password' ?
					<TextInput.Icon
						icon={isSecureEntry ? 'eye' : 'eye-off'}
						onPress={() => {
							setIsSecureEntry(!isSecureEntry);
						}}
					/>
					:
					type === 'search' ?
						<TextInput.Icon
							icon={value !== "" ? 'close' : 'account-search'}
							onPress={onPressIcon}
						/>
						: null
			}
		/>
	)
}
export default TxtInput;