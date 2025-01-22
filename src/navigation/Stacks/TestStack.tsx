import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThirdScreen from '../../screens/ThirdScreen';
import SecondScreen from '../../screens/SecondScreen';
import { useStyles } from 'react-native-unistyles';
import { navStylesheet } from '../../styles/navStylesheet';

const Stack = createNativeStackNavigator();

export default function TestStack() {
  const { styles } = useStyles(navStylesheet);

  return (
    <Stack.Navigator screenOptions={{
      contentStyle: {
        backgroundColor: styles.content.backgroundColor,
      },
      headerStyle: {
          backgroundColor: styles.header.backgroundColor,
      },
      headerTintColor: styles.header.color,
      headerTitleAlign: 'left',
  }}>
      <Stack.Screen name="Second Screen" component={SecondScreen} />
      <Stack.Screen name="Third Screen" component={ThirdScreen} />
    </Stack.Navigator>
  );
}
