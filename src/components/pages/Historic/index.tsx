import React from 'react';

import Header from '../../template/Header';

import { Button, Content, Toast } from 'native-base';

import { Linking, ScrollView, Text, View } from 'react-native';

import styles from './styles';
import QuestionCard from '../../template/QuestionCard';

function Historic(props: any) {

    function redirectToCoronavirusPage() {
        Linking.openURL('https://covid.saude.gov.br/')
            .catch((err) => {
                Toast.show({
                    text: 'Ocorreu um erro ao redirecionar para a página',
                    buttonText: "Ok",
                });
            }
            );
    }

    return (
        <Content>
            <Header subTitle="Histórico de Contato" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.text}>Responda as seguintes perguntas:</Text>
                    <QuestionCard
                        question="Você teve contato com alguém que foi diagnosticado com a covid-19 nos últimos dias?"
                        firstOption="Sim"
                        secondOption="Não"
                        onClickButton={(option: string) => console.log(option)}
                    />
                    <QuestionCard
                        question="Houve algum caso confirmado em sua região?"
                        firstOption="Sim"
                        secondOption="Não"
                        onClickButton={(option: string) => console.log(option)}
                    />
                    <QuestionCard
                        question="Você faz parte do grupo de risco?"
                        firstOption="Sim"
                        secondOption="Não"
                        onClickButton={(option: string) => console.log(option)}
                    />
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
                        style={{ ...styles.button, backgroundColor: '#53595f' }}
                        onPress={() => console.log('Próximo')}
                    >
                        <Text style={styles.text}>Próximo</Text>
                    </Button>
                </View>
            </ScrollView>
        </Content >

    );
}

export default Historic;

