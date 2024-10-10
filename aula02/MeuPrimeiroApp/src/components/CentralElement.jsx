import { View, StyleSheet } from "react-native";

const CentralElement = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.element}></View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    },

    element: {
        width: '50px',
        height: '50px',
        backgroundColor: 'black',
        borderRadius: '50%'
    }
})

export default CentralElement;