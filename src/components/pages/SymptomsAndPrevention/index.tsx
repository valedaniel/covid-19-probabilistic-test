import React from 'react';

import Header from '../../template/Header';

import { Button, Content, Root } from 'native-base';

import { ScrollView, Text, View } from 'react-native';

import InfoCard from '../../template/InfoCard';

import styles from './styles';

function SymptomsAndPrevention(props: any) {

    const { navigation } = props;

    const person = props?.route?.params?.person;
    const questions = props?.route?.params?.questions;

    function redirectToProbabilisticDiagnosis() {
        navigation.push('ProbabilisticDiagnosis', { person, questions });
    }

    return (
        <Content>
            <Root>
                <Header subTitle="Sintomas e Prevenção" />
                <ScrollView>
                    <View style={styles.container}>
                        <InfoCard
                            infoTexts={[
                                "Febre",
                                "Tosse Seca",
                                "Cansaço",
                                "Perda de paladar"
                            ]}
                            title="Sintomas"
                            typeIcon="Foundation"
                            nameIcon="alert"
                            color="#C40000"
                        />
                        <InfoCard
                            infoTexts={[
                                "Lavar as mãos frequentemente",
                                "Usar o cotovelo ao tossir ou espirrar",
                                "Não tocar no rosto",
                                "Manter distância de outras pessoas"
                            ]}
                            title="Prevenção"
                            typeIcon="AntDesign"
                            nameIcon="checksquare"
                            color="#28A745"
                        />
                        <Button
                            success
                            style={styles.button}
                            onPress={() => redirectToProbabilisticDiagnosis()}
                        >
                            <Text style={styles.text}>Próximo</Text>
                        </Button>
                    </View>
                </ScrollView>
            </Root>
        </Content >

    );
}

export default SymptomsAndPrevention;

