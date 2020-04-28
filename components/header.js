import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Check In</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#0066ff'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
    }
})