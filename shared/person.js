import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Person(props) {
    return(
        <TouchableOpacity>
            <View style={styles.person}>
                <Text>{props.name}</Text>
            </View>  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    person: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
    }
})