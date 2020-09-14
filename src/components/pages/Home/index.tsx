import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen'

import { Text, View } from 'react-native';

import Header from '../../template/Header';

import { Button, Content, Icon, Input, Item, Root, Toast } from 'native-base';

import styles from './styles';

function Home(props: any) {

    const [name, setName] = useState<string | undefined>(undefined);
    const [age, setAge] = useState<string | undefined>(undefined);
    const [city, setCity] = useState<string | undefined>(undefined);
    const [state, setState] = useState<string | undefined>(undefined);

    const { navigation } = props;

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    function validateFields() {
        if (!name || !age || !city || !state) {
            return { isValid: false, message: 'Preencha todos os campos' };
        }
        return { isValid: true, message: '' };
    }

    function nextPage() {
        const { isValid, message } = validateFields();
        if (isValid) {
            navigation.push('Historic');
        }

        Toast.show({
            text: message,
            buttonText: "Ok",
        });
    }

    return (
        <Root>
            <Content>
                <Header subTitle="Teste Probabilístico" />
                <View style={styles.containerText}>
                    <Text style={styles.text}>
                        Insira as informações abaixo para que possa iniciar o teste
                    </Text>
                </View>
                <View style={styles.containerInput}>
                    <Item style={styles.item} rounded inlineLabel>
                        <Icon style={styles.icon} type="FontAwesome" name='address-card' />
                        <Input
                            placeholder='Insira o seu nome'
                            placeholderTextColor='#fff'
                            onChangeText={(text: string) => setName(text)}
                            value={name}
                            style={styles.input}
                        />
                    </Item>
                    <Item style={styles.item} rounded inlineLabel>
                        <Icon style={styles.icon} type="FontAwesome" name='child' />
                        <Input
                            keyboardType="numeric"
                            placeholder='Insira a sua idade'
                            placeholderTextColor='#fff'
                            onChangeText={(text: string) => setAge(text)}
                            value={age}
                            style={styles.input}
                        />
                    </Item>
                    <Item style={styles.item} rounded inlineLabel>
                        <Icon style={styles.icon} type="MaterialIcons" name='location-city' />
                        <Input
                            placeholder='Insira a sua cidade'
                            placeholderTextColor='#fff'
                            onChangeText={(text: string) => setCity(text)}
                            value={city}
                            style={styles.input}
                        />
                    </Item>
                    <Item style={styles.item} rounded inlineLabel>
                        <Icon style={styles.icon} type="MaterialIcons" name='map' />
                        <Input
                            placeholder='Insira o seu estado'
                            placeholderTextColor='#fff'
                            onChangeText={(text: string) => setState(text)}
                            value={state}
                            style={styles.input}
                        />
                    </Item>
                    <Button block success onPress={nextPage} style={styles.button}>
                        <Text style={styles.text}>Iniciar</Text>
                    </Button>
                </View>
            </Content>
        </Root>
    );
}

export default Home;

