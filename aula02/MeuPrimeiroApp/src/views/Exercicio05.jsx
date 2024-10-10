import { View, StyleSheet } from "react-native";
import { Header } from "./../components/Header";


const Exercicio05 = () => {
    return (
        <>
            <View style={styles.content}>
                <Header></Header>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    }
})

export default Exercicio05;