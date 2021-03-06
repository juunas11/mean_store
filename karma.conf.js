// Karma configuration
// Generated on Sat Jan 10 2015 11:14:07 GMT+0900 (Korea Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      'lib/dist/js/vendor.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'node_modules/jasmine-sinon/lib/jasmine-sinon.js',
      'lib/dist/js/scripts.js',
      'lib/tests/unit/client/**/*.js',
      'lib/dist/partials/**/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'lib/dist/js/scripts.js' : 'coverage',
      '**/*.html' : 'ng-html2js'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'growl', 'coverage'],

    coverageReporter : {
      type : 'html',
      dir: 'client-coverage/'
    },

    ngHtml2JsPreprocessor : {
      cacheIdFromPath: function(filepath){
        var result = filepath.substring('lib/dist/'.length);
        return result;
      }
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
