import React from 'react';

import {View} from 'react-native';

import Styles from "../styles/Styles"

import 
    Txt 
    from '../components/misc/Text'

const Clients = () => {
    return (
        <View style={Styles.container}>
            <Txt
                style={[Styles.mb, Styles.textDanger]}
                value={"My clients"}
                weight='bold'
            />
        </View>
    );
};



export default Clients;
