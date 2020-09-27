import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import SplashScreen from 'react-native-splash-screen'
import { MaskService } from 'react-native-masked-text'

import { Button, Content, Root, Toast } from 'native-base';

import Header from '../../template/Header';
import InputIcon from '../../template/InputIcon';

import { validateCpf } from '../../../utils/validateCpf';

import styles from './styles';

function Home(props: any) {

    const [name, setName] = useState<string | undefined>(undefined);
    const [cpf, setCpf] = useState<string | undefined>(undefined);
    const [age, setAge] = useState<string | undefined>(undefined);
    const [city, setCity] = useState<string | undefined>(undefined);
    const [state, setState] = useState<string | undefined>(undefined);

    const { navigation } = props;

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    function validateFields() {
        if (!name || !cpf || !age || !city || !state) {
            return { isValid: false, message: 'Preencha todos os campos' };
        }

        if (!validateCpf(cpf)) {
            return { isValid: false, message: 'Digite um CPF válido' };
        }

        return { isValid: true, message: '' };
    }

    function nextPage() {
        const { isValid, message } = validateFields();
        if (isValid) {
            navigation.push('Historic', { person: { name, cpf, age, city, state } });
        } else {
            Toast.show({
                text: message,
                buttonText: "Ok",
            });
        }
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
                    <InputIcon
                        typeIcon="MaterialIcons"
                        nameIcon="person"
                        placeholder='Insira o seu nome'
                        value={name}
                        onChangeText={(text: string) => setName(text)}
                    />
                    <InputIcon
                        typeIcon="FontAwesome"
                        nameIcon="address-card"
                        placeholder='Insira o seu CPF'
                        value={cpf}
                        keyboardType="numeric"
                        onChangeText={(text: string) => setCpf(MaskService.toMask('cpf', text))}
                    />
                    <InputIcon
                        typeIcon="FontAwesome"
                        nameIcon="child"
                        placeholder='Insira a sua idade'
                        value={age}
                        keyboardType="numeric"
                        onChangeText={(text: string) => setAge(text)}
                    />
                    <InputIcon
                        typeIcon="MaterialIcons"
                        nameIcon="location-city"
                        placeholder='Insira a sua cidade'
                        value={city}
                        onChangeText={(text: string) => setCity(text)}
                    />
                    <InputIcon
                        typeIcon="MaterialIcons"
                        nameIcon="map"
                        placeholder='Insira o seu estado'
                        value={state}
                        onChangeText={(text: string) => setState(text)}
                    />
                    <Button block success onPress={nextPage} style={styles.button}>
                        <Text style={styles.text}>Iniciar</Text>
                    </Button>
                </View>
            </Content>
        </Root>
    );
}

export default Home;

