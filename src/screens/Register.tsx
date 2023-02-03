import React from 'react';

import {View} from 'react-native';

import Styles from "../styles/Styles"

import 
    Txt 
from '../components/misc/Text'

const Register = () => {
    return (
        <View style={Styles.container}>
            <Txt
                style={[Styles.mb, Styles.textDanger]}
                value={"My register"}
                weight='bold'
            />
        </View>
    );
};



export default Register;
