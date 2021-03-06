module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@application': './src/application',
          '@business': './src/business',
          '@core': './src/core',
          '@core/theme': './src/core/theme.ts',
          '@features': './src/features',
          '@features/components': './src/features/components',
          '@features/modules': './src/features/modules',
          '@store': './src/store',
          '@assets': './src/core/assets',
        },
      },
    ],
  ],
};
