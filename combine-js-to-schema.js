const { CodegenRunner } = require('@react-native/codegen');
const path = require('path');

const codegenRunner = new CodegenRunner({
  codegenDir: path.resolve(__dirname, 'generated'),
  rootDir: path.resolve(__dirname, '../../'),
});

codegenRunner.processModules();
