const fs = require('fs-extra');
const path = require('../lib/path');
const chalk = require('chalk');
const webpack = require('webpack');
const logger = require('../lib/logger');
const webpackConfig = require('../webpack.config');
const project = require('../../project.config');

if (project.env === 'production') {
  fs.removeSync(path.inProject(project.outDir));
}

const runWebpackCompiler = webpackCfg =>
  new Promise((resolve, reject) => {
    webpack(webpackCfg).run((err, stats) => {
      if (err) {
        logger.error('Webpack compiler encountered a fatal error.', err);
        return reject(err);
      }

      const jsonStats = stats.toJson();
      if (jsonStats.errors.length > 0) {
        logger.error('Webpack compiler encountered errors.');
        logger.log(jsonStats.errors.join('\n'));
        return reject(new Error('Webpack compiler encountered errors'));
      } else if (jsonStats.warnings.length > 0) {
        logger.warn('Webpack compiler encountered warnings.');
        logger.log(jsonStats.warnings.join('\n'));
      }
      resolve(stats);
      return true;
    });
  });

const compile = () => Promise.resolve()
  .then(() => logger.info('Starting compiler...'))
  .then(() => logger.info(`Target application environment: ${chalk.bold(project.env)}`))
  .then(() => runWebpackCompiler(webpackConfig))
  .then((stats) => {
    logger.info(`Copying static assets from ./public to ./${project.outDir}.`);
    fs.copySync(
      path.inProject('public'),
      path.inProject(project.outDir)
    );
    return stats;
  })
  .then((stats) => {
    if (project.verbose) {
      logger.log(stats.toString({
        colors: true,
        chunks: false,
      }));
    }
    logger.success(`Compiler finished successfully! See ./${project.outDir}.`);
  })
  .catch(err => logger.error('Compiler encountered errors.', err));

compile();
