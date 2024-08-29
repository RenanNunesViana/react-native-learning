import React from 'react';
import { View, Text } from 'react-native';

const Saudacao = ({ nome }) => {
    return (
        <View>
            <Text>Olá, {nome}</Text>
        </View>
    );
}

export default Saudacao;
