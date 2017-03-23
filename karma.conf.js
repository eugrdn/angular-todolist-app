var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        basePath: './src',
        frameworks: ['jasmine','requirejs'],
        files: [
            './public/bower_components/angular/angular.min.js',
            './public/bower_components/angular-route/angular-route.min.js',
            './public/bower_components/angular-mocks/angular-mocks.js',
            './app/app.module.js'
        ],
        exclude: [],
        preprocessors: {
            'src/**/!(*.spec|*.mock|*-mock|*.e2e|*.po|*.test).js': ['webpack', 'sourcemap']
        },
        plugins: [
            'karma-jasmine',
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-spec-reporter',
            'karma-requirejs'
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
