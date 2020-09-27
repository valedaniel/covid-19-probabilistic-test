import React, { useState } from 'react';

import Header from '../../template/Header';

import { Button, Content, Root, Toast } from 'native-base';

import { Linking, ScrollView, Text, View } from 'react-native';

import QuestionCard from '../../template/QuestionCard';

import styles from './styles';

function Historic(props: any) {

    const { navigation } = props;
    const person = props?.route?.params?.person;

    const [questions, setQuestions] = useState([
        { description: "Você teve contato com alguém que foi diagnosticado com a covid-19 nos últimos dias?", answer: '' },
        { description: "Houve algum caso confirmado em sua região?", answer: '' },
        { description: "Você faz parte do grupo de risco?", answer: '' }
    ]);

    function redirectToCoronavirusPage() {
        Linking.openURL('https://covid.saude.gov.br/')
            .catch((err) => {
                Toast.show({
                    text: 'Ocorreu um erro ao redirecionar para a página',
                    buttonText: "Ok",
                });
            });
    }

    function nextPage() {
        const isValid = validateFields();

        if (isValid) {
            navigation.push('SymptomsAndPrevention', { person, questions });
        } else {
            Toast.show({
                text: 'Responda a todas as perguntas listadas',
                buttonText: "Ok",
            });
        }
    }

    function validateFields() {
        let isValid = true;

        questions.forEach(question => {
            if (!question.answer) {
                isValid = false;
                return;
            }
        })

        return isValid
    }

    function onChangeQuestion(description: string, option: string) {
        questions.forEach(question => {
            if (question.description === description) {
                question.answer = option;
            }
        });
        setQuestions(questions);
    }

    function renderQuestions() {
        return questions.map(question => {
            return <QuestionCard
                key={question.description}
                question={question.description}
                firstOption="Sim"
                secondOption="Não"
                onClickButton={(option: string) => onChangeQuestion(question.description, option)}
            />
        })
    }
    return (
        <Content>
            <Root>
                <Header subTitle="Histórico de Contato" />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <Text style={styles.text}>Responda as seguintes perguntas:</Text>
                        {renderQuestions()}
                    </View>
                    <View style={styles.container}>
                        <Button
                            style={{ ...styles.button, backgroundColor: '#BD3232' }}
                            onPress={() => redirectToCoronavirusPage()}
                        >
                            <Text style={styles.text}>Saiba Mais</Text>
                        </Button>
                        <Button
                            success
                            style={styles.button}
                            onPress={() => nextPage()}
                        >
                            <Text style={styles.text}>Próximo</Text>
                        </Button>
                    </View>
                </ScrollView>
            </Root>
        </Content >

    );
}

export default Historic;

