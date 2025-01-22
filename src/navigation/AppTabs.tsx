import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstScreen from '../screens/FirstScreen';
import TestStack from './Stacks/TestStack';
import { useStyles } from 'react-native-unistyles';
import { navStylesheet } from '../styles/navStylesheet';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
    const { styles } = useStyles(navStylesheet);

    return (
    <Tab.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: styles.header.backgroundColor,
        },
        headerTintColor: styles.header.color,
        headerTitleAlign: 'left',
        tabBarActiveTintColor: styles.tabbar.color,
        tabBarInactiveTintColor: styles.tabbar.inactiveColor,
        tabBarStyle: {
            backgroundColor: styles.tabbar.backgroundColor,
        },
        sceneStyle: {
            backgroundColor: styles.content.backgroundColor,
        },
    }}>
        <Tab.Screen name="First Screen" component={FirstScreen} />
        <Tab.Screen name="Second Screen" options={{headerShown: false}} component={TestStack} />
    </Tab.Navigator>
    );
}
