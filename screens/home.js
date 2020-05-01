import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

export default class Home extends Component {


    // Temp testing Data
    state = {
        checkIns: [
            {id: 1, name: 'Kyle', checkedIn: [
                
            ]},
            {id: 2, name: 'Marisa', checkedIn: true},
            {id: 3, name: 'Richard', checkedIn: true},
            {id: 4, name: 'Christine', checkedIn: false}]
    }

    navigateHere = person => {
        const {navigate} = this.props.navigation;
        console.log(person.name);
        navigate('CheckedIn', person);
    }

    render() {
        return (
            <View style={globalStyles.container}>
                <View style={styles.pageContent}>
                <FlatList
                data={this.state.checkIns}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => this.navigateHere(item)}>
                        <View style={styles.person}>
                            <Text style ={globalStyles.titleText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageContent: {
        flex: 1,
        // backgroundColor: 'red',
    },
    person: {
        backgroundColor: '#ddd',
        color: '#fff',
        padding: 10,
        marginTop: 20
        // justifyContent: 'center',
        // textAlign: 'center'
    }
})