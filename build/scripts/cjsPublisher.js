const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');
const babel = require('babel-core');
const mkdirp = require('mkdirp');
const project = require('../../project.config');

const transFormCjsFiles = (from, to, target, ignore) => {
  const files = glob.sync(target, { cwd: from, ignore });
  files.forEach((file) => {
    const sourceFile = path.resolve(from, file);
    const targetFile = path.resolve(to, file);
    const targetDir = path.dirname(targetFile);
    mkdirp.sync(targetDir);
    const result = babel.transformFileSync(sourceFile, { env: project.env, comments: false });
    fse.writeFileSync(targetFile, result.code);
  });
};

const from = path.resolve(__dirname, `../../${project.inDir}`);
const to = path.resolve(__dirname, `../../${project.outDir}`);
const target = '**/?(*.js)';
const ignore = [];

transFormCjsFiles(from, to, target, ignore);
