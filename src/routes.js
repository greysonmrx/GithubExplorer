import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './screens/Main';
import User from './screens/User';

import HeaderTitle from './components/HeaderTitle';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: ({ navigation }) => ({
            headerTitle: (
                <HeaderTitle>Usuários</HeaderTitle>
              )
            })
        },
        User: {
            screen: User,
            navigationOptions: ({ navigation }) => ({
            headerTitle: (
                <HeaderTitle>{ navigation.getParam('item').name || navigation.getParam('item').login }</HeaderTitle>
              )
            })
        }
    }, {
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#20B865'
            },
            headerTintColor: '#FFFFFF'
        }
    })
);

export default Routes;