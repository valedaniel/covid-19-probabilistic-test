import React from 'react';

import Header from '../../template/Header';

import { Content } from 'native-base';

import styles from './styles';

function Historic(props: any) {

    const { navigation } = props;

    return (
        <Content>
            <Header subTitle="Histórico de Contato" />
        </Content>

    );
}

export default Historic;

