import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function CheckedIn({ navigation }) {

    return (
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('name')}</Text>
            <Text>{navigation.getParam('checkedIn')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})