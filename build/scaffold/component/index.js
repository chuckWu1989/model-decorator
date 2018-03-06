const path = require('../../lib/path');
const validate = require('../validate');

const dir = path.inProjectEntry('components');

module.exports = {
  description: 'Add a component',
  prompts: [{
    type: 'input',
    name: 'component',
    message: 'What should it be called?',
    default: 'TextField',
    validate: validate(dir),
  }],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: `${dir}/{{component}}/index.js`,
        templateFile: path.inProject('build', 'scaffold', 'component', 'index.js.hbs'),
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${dir}/{{component}}/props.js`,
        templateFile: path.inProject('build', 'scaffold', 'component', 'props.js.hbs'),
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
