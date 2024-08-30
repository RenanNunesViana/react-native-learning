import React from 'react';
import { View, StyleSheet } from 'react-native';

const LayoutVertical = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    box1: {
        height: 100,
        width: '100%',
        backgroundColor: 'red',
    },
    box2: {
        height: 100,
        width: '100%',
        backgroundColor: 'green',
    },
    box3: {
        height: 100,
        width: '100%',
        backgroundColor: 'blue',
    },
});

export default LayoutVertical;
