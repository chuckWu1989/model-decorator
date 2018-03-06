const project = require('../../project.config');
const path = require('path');

const inProject = (...args) => path.resolve(project.basePath, ...args);
const inProjectEntry = file => inProject(project.inDir, file);

exports.inProject = inProject;
exports.inProjectEntry = inProjectEntry;
exports.path = path;
