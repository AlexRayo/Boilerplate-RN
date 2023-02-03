import React from 'react';
import { Button } from 'react-native-paper';
import {primaryColor, grayColor, warningColor, dangerColor, darkColor, lightColor} from '../../styles/Styles';

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
    onPress: ()=> void,
}
const Btn = ({ value, color, onPress, icon, mode, disabled, style, compact, loading, uppercase }:propsType) => {
    return (
        <Button
            icon={icon === undefined ? '' : icon}
            mode={mode === undefined ? 'contained' : mode}
            compact={compact}
            onPress={onPress}
            loading={loading}
            uppercase={uppercase}
            color={
                color === undefined ? primaryColor :
                color === 'gray' ? grayColor :
                color === 'dark' ? darkColor :
                color === 'light' ? lightColor :
                color === 'white' ? "#fff" :
                color === 'warning' ? warningColor :
                color === 'danger' ? dangerColor :
                lightColor}
            disabled={disabled === undefined ? false : disabled}
            style={style}
        >
            {value}
        </Button>
    );
};
export default Btn;