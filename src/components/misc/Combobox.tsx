import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
import styles from "../../styles/Styles";

//
type propsType = {
    listItems: Array<string>,
    value: string, 
    text: string,
    iconCb: string,
    iconCbListItem: string
    setValue: (data:string)=>void,
}
const ComboBox = ({ listItems, value, setValue, text, iconCb, iconCbListItem }:propsType) => {

    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={[styles.bgLight]}>
            <Text style={[styles.textBold, styles.textSM]}>{text}</Text>
            <List.Accordion
                title={value}
                left={props => <List.Icon {...props} icon={iconCb} />}
                expanded={expanded}
                style={[styles.bgLight]}
                onPress={handlePress}>
                {
                    listItems?.map((item:any, i:any) => {
                        return <List.Item
                            key={i}
                            title={item}
                            left={props => <List.Icon {...props} icon={iconCbListItem} />}
                            onPress={() => {
                                setValue(item);
                                setExpanded(!expanded);
                            }} />
                    })
                }
            </List.Accordion>
        </View>
    );
};

export default ComboBox;