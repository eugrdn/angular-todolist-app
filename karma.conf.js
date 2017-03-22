var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        basePath: './src',
        frameworks: ['jasmine'],
        files: [
            './public/bower_components/angular/angular.min.js',
            './public/bower_components/angular-route/angular-route.min.js',
            './public/bower_components/angular-mocks/angular-mocks.js',
            './app/app.module.js',
            './app/app.config.js',
            './app/constants/filter.constants.js',
            './app/store/todos.state.js',
            './app/services/todos.service.js',
            './app/containers/todo-detail/todo-detail.component.js',
            './app/components/todo-filter/todo-filter.component.js',
            './app/components/todo-counter/todo-counter.component.js',
            './app/components/todo-add-form/todo-add-form.component.js',
            './app/directives/ccpStop.directive.js',
            './app/components/todo/todo.component.js',
            './app/components/todo-search-form/todo-search-form.component.js',
            './app/containers/todos/todos.component.js'
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
