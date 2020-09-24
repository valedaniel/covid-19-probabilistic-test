import React, { useEffect } from 'react';

import Header from '../../template/Header';

import { Button, Content, Icon, Root } from 'native-base';

import { ScrollView, Text, View } from 'react-native';

import firebase from '../../../services/firebase';

import { MaskService } from 'react-native-masked-text';

import {
    PATH_REF
} from 'react-native-dotenv';

import styles from './styles';

function Result(props: any) {

    const { navigation } = props;

    const person = props?.route?.params?.person;
    const questions = props?.route?.params?.questions;
    const diseases = props?.route?.params?.diseases;
    const previousDiseases = props?.route?.params?.previousDiseases;

    function redirectToStatics() {

    }

    useEffect(() => {
        if (person && questions && diseases && previousDiseases) {
            updateTest();
        }
    }, [person, questions, diseases, previousDiseases])

    function updateTest() {
        if (PATH_REF) {
            firebase.update(PATH_REF, MaskService.toRawValue('cpf', person.cpf), { person, questions, diseases, previousDiseases });
            firebase.refOff(PATH_REF);
        }
    }

    return (
        <Content>
            <Root>
                <Header subTitle="Resultado Probabilístico" />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.cardViewIcon}>
                        <Icon style={styles.icon} type="Foundation" name="alert" />
                        <Text style={styles.text}>Você tem <Text style={styles.textPercent}>28%</Text> de chances de ter contraído o novo coronavírus</Text>
                    </View>
                    <View style={styles.cardViewIcon}>
                        <Icon style={styles.smallIcon} type="Foundation" name="alert" />
                        <Text style={styles.title}>Atenção</Text>
                        <Text style={styles.smallText}>Busque por um atendimento médico imediatamente caso apresente algum dos sintomas graves</Text>
                    </View>
                    <Button
                        success
                        style={styles.button}
                        onPress={() => redirectToStatics()}
                    >
                        <Text style={styles.textButton}>Próximo</Text>
                    </Button>
                </ScrollView>
            </Root>
        </Content >

    );
}

export default Result;

