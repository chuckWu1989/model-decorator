const path = require('../../lib/path');
const validate = require('../validate');

const dir = path.inProjectEntry('containers');

module.exports = {
  description: 'Add a container',
  prompts: [{
    type: 'input',
    name: 'component',
    message: 'What should it be called?',
    default: 'TextField',
    validate: validate(dir),
  }],
  actions: () => {
    const actions = [{
      type: 'add',
      path: `${dir}/{{component}}Container/index.js`,
      templateFile: path.inProject('build', 'scaffold', 'container', 'index.js.hbs'),
      abortOnFail: true,
    }];
    return actions;
  },
};
