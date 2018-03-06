const { CLIEngine } = require('eslint');
const mkdirp = require('mkdirp');
const fse = require('fs-extra');
const myPath = require('../lib/path');
const project = require('../../project.config');
const logger = require('../lib/logger');

const cli = new CLIEngine({ fix: project.fixLint });

const lintTester = fixLint => (
  new Promise((resolve) => {
    const report = cli.executeOnFiles(['.']);
    if (fixLint) CLIEngine.outputFixes(report);
    logger.info('Checking files - done');
    resolve(report.results);
  })
);
const errorChecker = lintResult => (
  new Promise((resolve) => {
    const formatter = cli.getFormatter('stylish');
    const errorReport = CLIEngine.getErrorResults(lintResult);
    if (errorReport.length > 0) console.log(formatter(errorReport));
    resolve(lintResult);
  })
);
const formatToHtml = lintResult => (
  new Promise((resolve) => {
    const formatter = cli.getFormatter('html');
    const html = formatter(lintResult);
    resolve(html);
  })
);
const writeToFile = (filePath, data) => (
  new Promise((resolve) => {
    const fileDir = myPath.path.dirname(filePath);
    mkdirp(fileDir, (err) => {
      if (err) throw err;
      if (fse.existsSync(filePath)) {
        fse.unlinkSync(filePath);
      }
      fse.writeFile(filePath, data, (e) => {
        if (e) throw e;
        logger.info('Write to report - done');
        resolve();
      });
    });
  })
);
const outputChecker = (outputLint, lintResult, filePath) => (
  new Promise((resolve) => {
    if (outputLint) {
      formatToHtml(lintResult)
        .then(data => writeToFile(filePath, data))
        .then(() => resolve());
    } else {
      logger.warn('Ignore lint report output');
      resolve();
    }
  })
);

const filePath = myPath.inProject(project.reportDir, 'convention', 'index.html');

const process = () => {
  logger.info('Lint testing - Start');
  lintTester(project.fixLint)
    .then(errorChecker)
    .then(data => outputChecker(project.outputLint, data, filePath))
    .then(() => logger.info('Lint testing - Finish'))
    .catch((e) => { throw e; });
};

process();
