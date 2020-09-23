import React, { useState } from 'react';

import Header from '../../template/Header';

import { Button, Content, Icon, Input, Item, Root } from 'native-base';

import { ScrollView, Text, View } from 'react-native';

import MainCard from '../../template/MainCard';

import styles from './styles';
import SplashScreen from 'react-native-splash-screen';

function Result(props: any) {

    const { navigation } = props;

    function redirectToStatics() {

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

