module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      // 'react-native-unistyles/plugin',
      'react-native-reanimated/plugin',
    ],
  };
};
