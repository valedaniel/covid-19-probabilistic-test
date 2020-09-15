import { Icon, Input, Item } from 'native-base';
import React from 'react';

import styles from './styles';

type Props = { placeholder: string, value: any, typeIcon: any, nameIcon: string, keyboardType?: any, onChangeText: Function }

function InputIcon(props: Props) {
    const { typeIcon, nameIcon, placeholder, value, keyboardType, onChangeText } = props;
    return (
        <Item style={styles.item} rounded inlineLabel>
            <Icon style={styles.icon} type={typeIcon} name={nameIcon} />
            <Input
                placeholder={placeholder}
                placeholderTextColor='#fff'
                value={value}
                keyboardType={keyboardType}
                onChangeText={(text: string) => onChangeText(text)}
                style={styles.input}
            />
        </Item>
    );
}

export default InputIcon;

