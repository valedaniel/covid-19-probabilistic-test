import React, { useEffect, useState } from 'react';

import Header from '../../template/Header';

import { Button, Content, Root } from 'native-base';

import { ScrollView, Text, View } from 'react-native';

import DiagnosisCheckbox from '../../template/DiagnosisCheckbox';

import styles from './styles';

function ProbabilisticDiagnosis(props: any) {

    const { navigation } = props;

    const person = props?.route?.params?.person;
    const questions = props?.route?.params?.questions;

    const [diseases, setDisease] = useState([
        { description: "Febre", isChecked: false },
        { description: "Tosse Seca", isChecked: false },
        { description: "Cansaço", isChecked: false },
        { description: "Perda de Paladar", isChecked: false },
        { description: "Dificuldade de Respirar", isChecked: false },
    ]);

    function onChangeCheckbox(description: string, value: boolean) {
        diseases.forEach(disease => {
            if (disease.description === description) {
                disease.isChecked = value;
            }
        });
        setDisease(diseases);
    }

    function redirectToPreviousDiseases() {
        navigation.push('PreviousDiseases', { person, questions, diseases });
    }

    function renderDiagnosisCheckbox() {
        return diseases.map(disease => {
            return <DiagnosisCheckbox
                key={disease.description}
                text={disease.description}
                value={disease.isChecked}
                onChangeCheckbox={(value: boolean) => onChangeCheckbox(disease.description, value)}
            />
        })
    }

    return (
        <Content>
            <Root>
                <Header subTitle="Diagnóstico Probabilístico" />
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.text}>Selecione os sintomas que você sente</Text>
                        <View style={styles.containerCheckbox}>
                            {renderDiagnosisCheckbox()}
                        </View>
                        <Button
                            success
                            style={styles.button}
                            onPress={() => redirectToPreviousDiseases()}
                        >
                            <Text style={styles.text}>Próximo</Text>
                        </Button>
                    </View>
                </ScrollView>
            </Root>
        </Content >

    );
}

export default ProbabilisticDiagnosis;

