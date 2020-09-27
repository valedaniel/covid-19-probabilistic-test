import React, { useEffect, useState } from 'react';

import Header from '../../template/Header';

import { Button, Content, Icon, Root } from 'native-base';

import { ScrollView, Text, View } from 'react-native';

import firebase from '../../../services/api/firebase';

import { MaskService } from 'react-native-masked-text';

import {
    PATH_REF
} from 'react-native-dotenv';

import styles from './styles';

function Result(props: any) {

    const { navigation } = props;

    const [percentage, setPercentage] = useState<any>('');

    const person = props?.route?.params?.person;
    const questions = props?.route?.params?.questions;
    const diseases = props?.route?.params?.diseases;
    const previousDiseases = props?.route?.params?.previousDiseases;

    function redirectToStatics() {
        navigation.push('Statistic');
    }

    useEffect(() => {
        if (person && questions && diseases && previousDiseases) {
            const percentage = calculatePercentage();
            setPercentage(percentage);
            updateTest(percentage);
        }
    }, [person, questions, diseases, previousDiseases])

    function updateTest(percentage: string) {
        if (PATH_REF && percentage) {
            firebase.update(PATH_REF, MaskService.toRawValue('cpf', person.cpf), { person: { ...person, percentage }, questions, diseases, previousDiseases });
            firebase.refOff(PATH_REF);
        }
    }

    function calculatePercentage() {

        const percentageOfDiseases = calculatePercentageOfDiseases();
        const percentageOfQuestions = calculatePercentageOfQuestions();

        if ((percentageOfDiseases + percentageOfQuestions) >= 100) {
            return `${100}%`
        } else {
            return `${percentageOfDiseases + percentageOfQuestions}%`
        }
    }

    function calculatePercentageOfDiseases() {
        let percentageCalculated = 0;

        diseases.forEach((disease: any) => {
            if (disease.isChecked) {
                switch (disease.description) {
                    case 'Febre': {
                        percentageCalculated = percentageCalculated + 15;
                        break;
                    }
                    case 'Tosse Seca': {
                        percentageCalculated = percentageCalculated + 15;
                        break;
                    }
                    case 'Cansaço': {
                        percentageCalculated = percentageCalculated + 7;
                        break;
                    }
                    case 'Perda de Paladar': {
                        percentageCalculated = percentageCalculated + 10;
                        break;
                    }
                    case 'Dificuldade de Respirar': {
                        percentageCalculated = percentageCalculated + 13;
                        break;
                    }
                    default: break;
                }
            }
        });


        return percentageCalculated
    }

    function calculatePercentageOfQuestions() {
        let percentageCalculated = 0;

        questions.forEach((question: any) => {
            if (question.answer === "Sim") {
                switch (question.description) {
                    case 'Você teve contato com alguém que foi diagnosticado com a covid-19 nos últimos dias?': {
                        percentageCalculated = percentageCalculated + 15;
                        break;
                    }
                    case 'Houve algum caso confirmado em sua região?': {
                        percentageCalculated = percentageCalculated + 5;
                        break;
                    }
                    default: break;
                }
            }
        });

        return percentageCalculated;
    }

    return (
        <Content>
            <Root>
                <Header subTitle="Resultado Probabilístico" />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.cardViewIcon}>
                        <Icon style={styles.icon} type="Foundation" name="alert" />
                        <Text style={styles.text}>Você tem <Text style={styles.textPercent}>{percentage}</Text> de chances de ter contraído o novo coronavírus</Text>
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

