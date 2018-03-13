const project = require('../../project.config');
const path = require('../lib/path');

module.exports = {
  rootDir: path.inProject(''),
  roots: [`<rootDir>/${project.testDir}`],
  moduleDirectories: ['node_modules', `<rootDir>/${project.inDir}`],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/build/configs/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFiles: ['<rootDir>/tests/test-bundler.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['json', 'lcov', 'text'],
  coverageDirectory: `<rootDir>/${project.reportDir}/coverage`,
  globals: {
    __DEV__: true,
  },
  coverageThreshold: {
    global: project.coverageThreshold,
  },
};
