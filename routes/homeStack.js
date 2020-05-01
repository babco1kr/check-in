import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import CheckedIn from '../screens/checkedIn';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
            headerTitle: () => <Header navigation={navigation} title='App Home' />,
            headerTitleAlign: 'center'
            }
        }
    },
    CheckedIn: {
        screen: CheckedIn,
        navigationOptions: {
            title: 'User Check In',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 80}
    }
});

export default HomeStack;