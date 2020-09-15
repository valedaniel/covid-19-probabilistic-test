import { Icon } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';

import styles from './styles';

type Props = { title: string, typeIcon: any, nameIcon: string, color: string, infoTexts: Array<string> }

function InfoCard(props: Props) {
    const { title, typeIcon, nameIcon, color, infoTexts } = props;


    function renderInfoTexts() {
        return infoTexts?.map(infoText => {
            return <Text style={styles.text}>{infoText}</Text>
        })
    }

    return (
        <View style={styles.container}>
            <Grid>
                <Row>
                    <Icon style={{ ...styles.icon, color }} type={typeIcon} name={nameIcon} />
                    <View style={styles.viewTitle}>
                        <Text style={{ ...styles.title, color }}>{title}</Text>
                    </View>
                </Row>
            </Grid>
            <View style={styles.viewContent}>
                {renderInfoTexts()}
            </View>
        </View>
    );
}

export default InfoCard;

