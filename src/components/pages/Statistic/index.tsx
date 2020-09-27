import React, { useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';

import { Button, Content, Picker, Root, Toast } from 'native-base';

import { ScrollView } from 'react-native-gesture-handler';

import Header from '../../template/Header';
import MainCardCol from '../../template/MainCardCol';

import covidService from '../../../services/covidService';

import styles from './styles';

function Statistic(props: any) {

    const MESSAGE_SERVER_ERROR = 'Não foi possível se conectar ao servidor'

    const [dataCountries, setDataCountries] = useState<Array<any>>([]);
    const [dataStates, setDataStates] = useState<Array<any>>([]);

    const [selectedCountry, setSelectedCountry] = useState<any>('');
    const [selectedState, setSelectedState] = useState<any>('');

    const [selectedDataValueCountry, setSelectedDataValueCountry] = useState<any>({});
    const [selectedDataValueState, setSelectedDataValueState] = useState<any>({});

    useEffect(() => {
        getStatus()
    }, []);

    async function getStatus() {
        try {
            const resStatus = await covidService.getStatus();
            if (resStatus.status === "ok") {
                getAllCountries();
                getAllStates();
            } else {
                throw new Error();
            }
        } catch (err) {
            showToast(MESSAGE_SERVER_ERROR);
        }
    }

    async function getAllCountries() {
        try {
            const resCountries = await covidService.getAllCountries();
            setDataCountries(resCountries.data);
        } catch (err) {
            showToast(MESSAGE_SERVER_ERROR);
        }
    }

    async function getAllStates() {
        try {
            const resStates = await covidService.getAllStatesOfBrazil();
            setDataStates(resStates.data);
        } catch (err) {
            showToast(MESSAGE_SERVER_ERROR);
        }
    }

    function showToast(message: string) {
        Toast.show({
            text: message,
            buttonText: "Ok",
        });
    }

    function renderCountries() {
        return dataCountries.map((dataCountry: any) => {
            return <Picker.Item key={dataCountry.country} label={dataCountry.country} value={dataCountry.country} />
        })
    }

    function renderStates() {
        return dataStates.map((dataState: any) => {
            return <Picker.Item key={dataState.uid} label={dataState.state} value={dataState.uid} />
        })
    }

    function renderCountryValues() {
        if (selectedDataValueCountry) {
            return <>
                <MainCardCol firstText="Total de casos" secondText={selectedDataValueCountry.cases} />
                <MainCardCol firstText="Confirmados" secondText={selectedDataValueCountry.confirmed} />
                <MainCardCol firstText="Total de mortes" secondText={selectedDataValueCountry.deaths} />
                <MainCardCol firstText="Recuperados" secondText={selectedDataValueCountry.recovered} />
            </>
        }
    }

    function renderStateValues() {
        if (selectedDataValueState) {
            return <>
                <MainCardCol firstText="Total de casos" secondText={selectedDataValueState.cases} />
                <MainCardCol firstText="Total de mortes" secondText={selectedDataValueState.deaths} />
                <MainCardCol firstText="Suspeitos" secondText={selectedDataValueState.suspects} />
            </>
        }
    }

    return (
        <Content>
            <Root>
                <Header subTitle="Estatísticas" />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.containerPick}>
                        <Picker
                            mode="dropdown"
                            style={styles.picker}
                            onValueChange={(itemValue: any, itemPosition: number) => {
                                setSelectedCountry(itemValue);
                                setSelectedDataValueCountry(dataCountries[itemPosition - 1])
                            }}
                            selectedValue={selectedCountry}
                        >
                            <Picker.Item key="Selecione o país" label="Selecione o país" value="" />
                            {renderCountries()}
                        </Picker>
                    </View>
                    {(selectedCountry === 'Brazil') ?
                        <View style={styles.containerPick}>
                            <Picker
                                mode="dropdown"
                                style={styles.picker}
                                onValueChange={(itemValue: any, itemPosition: number) => {
                                    setSelectedState(itemValue);
                                    setSelectedDataValueState(dataStates[itemPosition - 1])
                                }}
                                selectedValue={selectedState}
                            >
                                <Picker.Item key="Todos os estados" label="Todos os estados" value="" />
                                {renderStates()}
                            </Picker>
                        </View> : null}
                    {(selectedCountry === 'Brazil' && selectedState)
                        ? renderStateValues() :
                        (selectedCountry) ?
                            renderCountryValues() : null}
                    {(selectedCountry) ?
                        <Text style={styles.footerText}>
                            *Valores ilustrativos
                        </Text> : null}
                    <Button
                        success
                        style={styles.button}
                        onPress={() => BackHandler.exitApp()}
                    >
                        <Text style={styles.textButton}>Finalizar</Text>
                    </Button>
                </ScrollView>
            </Root>
        </Content >

    );
}

export default Statistic;

