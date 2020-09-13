import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'native-base';
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const coronavirus = require('../../../assets/images/coronavirus.png');

type Props = { subTitle: string }

function Header(props: Props) {
    const navigation = useNavigation();

    function renderBackButton() {
        const { index, routes } = navigation.dangerouslyGetState();
        const currentRoute = routes[index].name;
        if (currentRoute !== 'Home') {
            return <Button transparent onPress={() => navigation.goBack()} style={styles.backButton}>
                <Icon style={styles.icon} type="MaterialIcons" name='arrow-back' />
            </Button>
        }
    }

    return (
        <View style={styles.container}>
            {renderBackButton()}
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

