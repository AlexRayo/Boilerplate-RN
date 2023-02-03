import React from 'react';
import {Text} from 'react-native-paper';
import styles from '../../styles/Styles';

//
type propsType = {
    value: string,
    size?: 'xl' | 'lg' | 'xs' | 'sm',
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'gray'| 'light' | 'white' | 'dark',
    weight?: 'bold' | 'normal',
    alignment?: 'center' | 'right' | 'left' ,
    style?: Array<object> ,
    onPress?: ()=>void,
}
const Txt = ({value, size, color, weight, alignment, style, onPress}:propsType) => {
    return (
        <Text
            style={[
                size == 'xl' ? styles.textXL :
                size == 'lg' ? styles.textLG :
                size == 'xs' ? styles.textXS :
                styles.textSM,
                color == 'primary' ? styles.textPrimary :
                color == 'secondary' ? styles.textSecondary :
                color == 'danger' ? styles.textDanger :
                color == 'warning' ? styles.textWarning :
                color == 'gray' ? styles.textGray :
                color == 'light' ? styles.textLight :
                color == 'white' ? styles.textWhite :
                styles.textDark,
                weight == 'bold' ? styles.textBold :
                null,
                alignment == 'left' ? styles.textLeft :
                alignment == 'center' ? styles.textCenter :
                alignment == 'right' ? styles.textRight :
                styles.textLeft,
                style === undefined ? null : style
            ]}        
            onPress = {onPress}
            >
          {value}
        </Text>
      );
    };
export default Txt;
