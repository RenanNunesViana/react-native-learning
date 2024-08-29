import React from 'react';
import { View, Text } from 'react-native';

const Tarefa01 = ({ nome }) => {
    return (
        <View>
            <Text>Olá, {nome}</Text>
        </View>
    );
}

export default Tarefa01;
