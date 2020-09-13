import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const coronavirus = require('../../../assets/images/coronavirus.png');

type Props = { subTitle: string }

function Header(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.text, ...styles.title }}>
                Avalia Coronavírus
            </Text>
            <Text style={{ ...styles.text, ...styles.subTitle }}>
                {props.subTitle}
            </Text>
            <Image style={styles.image} source={coronavirus} />
        </View>
    );
}

export default Header;

