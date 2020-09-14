import { Button } from 'native-base';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';

import styles from './styles';

type Props = { question: string, firstOption: string, secondOption: string, onClickButton: Function }

function QuestionCard(props: Props) {
    const { question, firstOption, secondOption, onClickButton } = props;

    const [buttonSelected, setButtonSelected] = useState<string | null>(null)

    function getButtonDynamicStyles(option: string) {
        if (buttonSelected !== null && buttonSelected === option) {
            return { ...styles.button, backgroundColor: '#BD3232' }
        }
        return styles.button;
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.textQuestion}>{question}</Text>
            </View>
            <Grid>
                <Row style={styles.row}>
                    <Button
                        style={getButtonDynamicStyles(firstOption)}
                        onPress={() => {
                            setButtonSelected(firstOption);
                            onClickButton(firstOption);
                        }}
                    >
                        <Text style={styles.text}>Sim</Text>
                    </Button>
                    <Button
                        style={getButtonDynamicStyles(secondOption)}
                        onPress={() => {
                            setButtonSelected(secondOption);
                            onClickButton(secondOption);
                        }}
                    >
                        <Text style={styles.text}>Não</Text>
                    </Button>
                </Row>
            </Grid>
        </View>

    );
}

export default QuestionCard;

