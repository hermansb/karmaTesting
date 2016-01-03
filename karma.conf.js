var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    plugins: [
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-ie-launcher'),
      require('karma-firefox-launcher')
    ],

    basePath: '',
    frameworks: [ 'tap' ],
    files: [ 'tests/unit/*.js' ],

    preprocessors: {
      'tests/unit/*.js': [ 'webpack' ]
    },

    webpack: {
      node : {
        fs: 'empty'
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    reporters: [ 'dots' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'PhantomJS', 'IE', 'Firefox'],
    singleRun: false
  })
};