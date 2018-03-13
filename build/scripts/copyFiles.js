const path = require('path');
const fse = require('fs-extra');
const logger = require('../lib/logger');
const project = require('../../project.config');

const copyFile = (file, to) => {
  const buildPath = path.resolve(to, path.basename(file));
  return new Promise((resolve) => {
    fse.copy(file, buildPath, (err) => {
      if (err) {
        throw err;
      }
      resolve();
    });
  }).then(() => logger.info(`Copied ${file} to ${buildPath}`));
};
const copyFolder = (folder, from, to) => {
  const sourceDir = path.resolve(from, folder);
  const targetDir = path.resolve(to, folder);
  return new Promise((resolve) => {
    fse.copy(sourceDir, targetDir, (err) => {
      if (err) {
        logger.error('Fail to parse assets');
      }
      logger.info(`Parsed ${sourceDir} into ${targetDir}`);
      resolve();
    });
  });
};
const createPackageJsonFile = to => (
  new Promise((resolve) => {
    fse.readFile(path.resolve(__dirname, '../../package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      resolve(data);
    });
  }).then(data => JSON.parse(data)).then((packageData) => {
    const minimalPackage = Object.assign(packageData, {
      main: './index.js',
      private: false,
    });
    return new Promise((resolve) => {
      const buildPath = path.resolve(to, 'package.json');
      const data = JSON.stringify(minimalPackage, null, 2);
      fse.writeFile(buildPath, data, (err) => {
        if (err) throw err;
        logger.info(`Created package.json in ${buildPath}`);
        resolve();
      });
    });
  })
);

const from = path.resolve(__dirname, `../../${project.inDir}`);
const to = path.resolve(__dirname, `../../${project.outDir}`);
const files = ['README.md', 'CHANGELOG.md', 'LICENSE'];
const folders = [];

const copyAll = () => {
  logger.info('Copy files ... Start');
  let promises = files.map(file => copyFile(file, to));
  promises = promises.concat(folders.map(folder => copyFolder(folder, from, to)));
  promises = promises.concat(createPackageJsonFile(to));
  Promise.all(promises).then(() => logger.info('Copy files ... Done'));
};

copyAll();
