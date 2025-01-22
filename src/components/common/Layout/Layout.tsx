import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from '../../../navigation/Navigation';

export default function Layout() {
  return (
    <>
        <StatusBar barStyle="dark-content" />
        <Navigation />
    </>
  );
}
