import { View, StyleSheet } from "react-native";

const ThreeViewsEqualspace = () => {
    return (
        <>
            <View style={styles.content}>
                <View style={styles.firstView}></View>
                <View style={styles.secondView}></View>
                <View style={styles.thirdView}></View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        flex: 1
    },
    firstView: {
        backgroundColor: 'green',
        flex: '1'
    },
    secondView: {
        backgroundColor: 'red',
        flex: '1'
    },
    thirdView: {
        backgroundColor: 'yellow',
        flex: '1'
    },
})

export default ThreeViewsEqualspace;