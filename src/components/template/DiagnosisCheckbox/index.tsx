import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';

import styles from './styles';

type Props = { text: string, value?: boolean, onChangeCheckbox: Function }

function DiagnosisCheckbox(props: Props) {
    const { text, value, onChangeCheckbox } = props;

    const [isSelected, setSelection] = useState((value) ? value : false);

    return (
        <View style={styles.container}>
            <Grid>
                <Row>
                    <CheckBox
                        tintColors={{ true: '#777777', false: '#777777' }}
                        value={isSelected}
                        style={styles.checkbox}
                        onValueChange={(value: boolean) => {
                            onChangeCheckbox(value);
                            setSelection(value);
                        }}
                    />
                    <Text style={styles.text}>{text}</Text>
                </Row>
            </Grid>
        </View>
    );
}

export default DiagnosisCheckbox;

