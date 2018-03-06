const path = require('../../lib/path');
const validate = require('../validate');

const dir = path.inProjectEntry('actions');

module.exports = {
  description: 'Add a action',
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
      path: `${dir}/{{component}}Action/index.js`,
      templateFile: path.inProject('build', 'scaffold', 'action', 'index.js.hbs'),
      abortOnFail: true,
    }];
    return actions;
  },
};
