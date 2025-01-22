import { createStyleSheet } from 'react-native-unistyles';

export const navStylesheet = createStyleSheet(theme => ({
    header: {
        backgroundColor: theme.colors.card,
        color: theme.colors.text,
    },
    tabbar: {
        backgroundColor: theme.colors.card,
        color: theme.colors.primary,
        inactiveColor: theme.colors.border,
    },
    content: {
        padding: 16,
        backgroundColor: theme.colors.background,
    },
}));
