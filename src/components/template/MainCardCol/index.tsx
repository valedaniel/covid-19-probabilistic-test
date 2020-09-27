import React from 'react';
import { Text, View } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

import styles from './styles';

type Props = { firstText: string, secondText: string }

function MainCardCol(props: Props) {
    const { firstText, secondText } = props;

    return (
        <View style={styles.container}>
            <Grid>
                <Col>
                    <Text style={styles.text}>{firstText}</Text>
                    <Text style={styles.text}>{secondText}</Text>
                </Col>
            </Grid>
        </View>
    );
}

export default MainCardCol;

