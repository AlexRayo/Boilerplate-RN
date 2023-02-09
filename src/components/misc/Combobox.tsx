import React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
import styles from "../../styles/Styles";

interface Props {
    listItems: string[];
    value: string;
    text: string;
    iconCb: string;
    iconCbListItem: string;
    setValue: (data: string) => void;
}

const ComboBox: React.FC<Props> = ({
    listItems,
    value,
    setValue,
    text,
    iconCb,
    iconCbListItem
}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={[styles.bgLight]}>
            <Text style={[styles.textBold, styles.textSM]}>{text}</Text>
            <List.Accordion
                title={value}
                left={props => <List.Icon {...props} icon={iconCb} />}
                expanded={expanded}
                style={[styles.bgLight]}
                onPress={handlePress}
            >
                {
                    listItems?.map((item, i) => (
                        <List.Item
                            key={i}
                            title={item}
                            left={props => <List.Icon {...props} icon={iconCbListItem} />}
                            onPress={() => {
                                setValue(item);
                                setExpanded(!expanded);
                            }}
                        />
                    ))}
            </List.Accordion>
        </View>
    );
};

export default ComboBox;
