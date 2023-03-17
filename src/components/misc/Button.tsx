import React from 'react';
import { Button } from 'react-native-paper';
import { color } from '../../config/theme';
const { primary, gray, warning, danger, dark, light } = color;

//
type propsType = {
	value: string,
	color?: "primary" | "gray" | "danger" | "warning" | "dark" | "light" | "white",
	icon?: string,
	mode?: "text" | "outlined" | "contained" | "contained-tonal" | "elevated" | undefined,
	style?: [],
	compact?: boolean,
	loading?: boolean,
	disabled?: boolean,
	uppercase?: boolean,
	onPress: () => void,
}
const Btn = ({ value, color, onPress, icon, mode, disabled, style, compact, loading, uppercase }: propsType) => {
	return (
		<Button
			icon={icon === undefined ? '' : icon}
			mode={mode === undefined ? 'contained' : mode}
			compact={compact}
			onPress={onPress}
			loading={loading}
			uppercase={uppercase}
			color={
				color === undefined ? primary :
					color === 'gray' ? gray :
						color === 'dark' ? dark :
							color === 'light' ? light :
								color === 'white' ? "#fff" :
									color === 'warning' ? warning :
										color === 'danger' ? danger :
											light}
			disabled={disabled === undefined ? false : disabled}
			style={style}
		>
			{value}
		</Button>
	);
};
export default Btn;