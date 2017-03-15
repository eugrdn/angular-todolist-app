var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './src/public/bower_components/angular/angular.min.js',
      './src/public/bower_components/angular-route/angular-route.min.js',
      './src/public/bower_components/angular-mocks/angular-mocks.js',
      './src/app/**/*.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/!(*.spec|*.mock|*-mock|*.e2e|*.po|*.test).js': ['webpack', 'sourcemap']
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      'karma-babel-preprocessor',
      'karma-spec-reporter'
    ],
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};
