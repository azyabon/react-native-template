import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AppTabs from './AppTabs';

const resetBaseTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

export default function Navigation() {
  return (
    <NavigationContainer theme={resetBaseTheme}>
        <AppTabs />
    </NavigationContainer>
  );
}
