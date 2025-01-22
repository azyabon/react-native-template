import { Text, Pressable } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import { stylesheet } from './Button.styles';

interface IButtonProps {
    onPress: () => void,
    label: string,
}

export default function Button(props: IButtonProps) {
    const { styles } = useStyles(stylesheet);

    return (
        <Pressable style={styles.button} onPress={props.onPress}>
            <Text style={styles.label}>{props.label}</Text>
        </Pressable>
    );
}
