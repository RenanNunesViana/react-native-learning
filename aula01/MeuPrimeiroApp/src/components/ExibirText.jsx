import { View, TextInput, Text } from 'react-native'
import { useState } from 'react'

const ExibirText = () => {

    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder='Digite o texto'
            />
            <Text>Texto digitado: {text}</Text>
        </View>
    )
}

export default ExibirText;