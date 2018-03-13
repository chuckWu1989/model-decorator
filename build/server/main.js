/* eslint import/no-extraneous-dependencies: "off" */
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const logger = require('../lib/logger');
const webpackConfig = require('../webpack.config');
const project = require('../../project.config');
const compress = require('compression');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

// Apply gzip compression
app.use(compress());

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig);

  logger.info('Enabling webpack development and HMR middleware');
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(project.basePath, project.inDir),
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
      colors: true,
      modules: false,
    },
  }));
  app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
  }));

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(path.resolve(project.basePath, 'public')));

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
      return true;
    });
  });
} else {
  logger.warn('Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.');

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(path.resolve(project.basePath, project.outDir)));
}

module.exports = app;
