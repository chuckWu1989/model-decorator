const fse = require('fs-extra');
const path = require('path');

const list = fse.readdirSync(__dirname);

module.exports = (plop) => {
  list.forEach((component) => {
    const componentPath = path.resolve(__dirname, component);
    const isDir = fse.lstatSync(componentPath).isDirectory();
    if (isDir) {
      const generator = require(componentPath);
      plop.setGenerator(component, generator);
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
