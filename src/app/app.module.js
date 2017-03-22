define(function (require) {
    'use strict';

    angular
        .module('todoListApp', ['ngRoute']);

    require('./app.config');
    require('./constants/filter.constants');
    require('./store/todos.state');
    require('./services/todos.service');
    require('./containers/todo-detail/todo-detail.component');
    require('./components/todo-filter/todo-filter.component');
    require('./components/todo-counter/todo-counter.component');
    require('./components/todo-add-form/todo-add-form.component');
    require('./directives/ccpStop.directive');
    require('./components/todo/todo.component');
    require('./components/todo-search-form/todo-search-form.component');
    require('./containers/todos/todos.component');
});