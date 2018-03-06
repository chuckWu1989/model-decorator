const myPath = require('../lib/path');
const fse = require('fs-extra');
const logger = require('../lib/logger');

module.exports = dir => (
  (value) => {
    if ((/.+/).test(value)) {
      const dirExist = fse.existsSync(myPath.path.resolve(dir, value));
      if (dirExist) {
        logger.error('Name already exists');
        return false;
      }
      return true;
    }
    return 'The name is required';
  }
);
