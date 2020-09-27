import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Button, Content, Input, Item, Root } from 'native-base';

import Header from '../../template/Header';
import MainCard from '../../template/MainCard';

import styles from './styles';

function PreviousDiseases(props: any) {

    const { navigation } = props;

    const [previousDiseasesArray, setPreviousDiseasesArray] = useState<any>([]);
    const [disease, setDisease] = useState('');

    const person = props?.route?.params?.person;
    const questions = props?.route?.params?.questions;
    const diseases = props?.route?.params?.diseases;

    function addNewDisease() {
        if (disease) {
            let newArray: any[] = [...previousDiseasesArray, { description: disease }];
            setPreviousDiseasesArray(newArray);
            setDisease('');
        }
    }

    function renderPreviousDiseases() {
        return previousDiseasesArray.map((previousDisease: any) => {
            return <MainCard key={previousDisease.description} text={previousDisease.description} />
        });
    }

    function redirectToResult() {
        navigation.push('Result', { person, questions, diseases, previousDiseases: previousDiseasesArray });
    }

    return (
        <Content>
            <Root>
                <Header subTitle="Doenças Prévias" />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.containerInput}>
                        <Item style={styles.item} rounded>
                            <Input
                                placeholder="Insira o nome da doença"
                                placeholderTextColor='#fff'
                                value={disease}
                                onChangeText={(text: string) => setDisease(text)}
                                style={styles.input}
                            />
                        </Item>
                        <Button
                            block
                            style={styles.button}
                            onPress={() => addNewDisease()}
                        >
                            <Text style={styles.text}>Adicionar</Text>
                        </Button>
                    </View>
                    {renderPreviousDiseases()}
                    <Button block success onPress={() => redirectToResult()} style={styles.buttonNextPage}>
                        <Text style={styles.textNextPage}>Próximo</Text>
                    </Button>
                </ScrollView>
            </Root>
        </Content >

    );
}

export default PreviousDiseases;

