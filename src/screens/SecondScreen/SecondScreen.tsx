import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import Button from '../../components/ui/Button';

export default function SecondScreen() {
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View>
        <Button onPress={() => navigate('Third Screen')} label="Go to Third Screen" />
    </View>
  );
}
