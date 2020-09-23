import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type Props = { text: string }

function MainCard(props: Props) {
    const { text } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

export default MainCard;

