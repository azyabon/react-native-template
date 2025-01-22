import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Layout from './src/components/common/Layout';
import {Provider} from 'react-redux';
import { store } from './src/reducers';

import './src/styles/index';

function App(): React.JSX.Element {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <Provider store={store}>
          <Layout />
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>

  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
      flex: 1,
      backgroundColor: theme.colors.background,
  },
}));

export default App;
