import { View, StyleSheet } from "react-native";

const ThreeViewsMiddleHigher = () => {
    return (
        <>
            <View style={styles.firstView}></View>
            <View style={styles.secondView}></View>
            <View style={styles.thirdView}></View>
        </>
    )
}

const styles = StyleSheet.create({
    firstView: {
        width: '50px',
        height: '100vh',
        backgroundColor: 'red'
    },
    secondView: {
        flex: '1',
        height: '100vh',
        backgroundColor: 'yellow'
    },
    thirdView: {
        width: '50px',
        height: '100vh',
        backgroundColor: 'green'
    }
})

export default ThreeViewsMiddleHigher;