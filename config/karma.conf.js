var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      {pattern: './config/karma-test-shim.js', watched: false}
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap'],
      '**/*.hbs': ['handlebars']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    handlebarsPreprocessor: {
      // name of the variable to store the templates hash
      templates: "Handlebars.templates",

      // translates original file path to template name
      templateName: function(filepath) {
        return filepath.replace(/^.*\/([^\/]+)\.hbs$/, '$1');
      },

      // transforms original file path to path of the processed file
      transformPath: function(path) {
        return path.replace(/\.hbs$/, '.js');
      }
    },
    
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  };

  config.set(_config);
};
