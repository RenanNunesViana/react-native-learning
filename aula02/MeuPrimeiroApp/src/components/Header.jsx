import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <>
            <View style={style.content}>
                <Text style={style.title}>Meu App</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'powderblue'
    },
    title: {
        width: '25%',
    }
})

export default Header