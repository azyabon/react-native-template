import { UnistylesRegistry } from 'react-native-unistyles';
import { breakpoints } from './base/breakpoints';
import { lightTheme } from './base/themes';

type AppBreakpoints = typeof breakpoints
type AppThemes = {
  light: typeof lightTheme,
}

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry
  .addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
  })
  .addConfig({
    adaptiveThemes: true,
    initialTheme: 'light',
  });
