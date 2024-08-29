import { useState } from 'react'
import { View, Text, Button } from 'react-native'

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>O contador atual é {count}</Text>
            <Button title='some' onPress={() => { setCount(count + 1) }} />
            <Button title='subtraia' onPress={() => { setCount(count - 1) }} />
        </View>
    )

}

export default Counter;