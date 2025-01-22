import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: theme.colors.primary,
        borderRadius: 32,
    },
    label: {
        color: theme.colors.text2,
    },
}));
