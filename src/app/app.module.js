define([
    './app.config',
    '../app/store/todos.state',
    '../app/services/todos.service',
    './directives/ccpStop.directive',
    './containers/todos/todos.component',
    './containers/todo-detail/todo-detail.component',
    './components/todo-filter/todo-filter.component',
    './components/todo-counter/todo-counter.component',
    './components/todo-add-form/todo-add-form.component',
    './components/todo-search-form/todo-search-form.component',
    './components/todo/todo.component'
], function (TodosConfig,
             TodosState,
             TodosService,
             ccpStop,
             Todos,
             TodoDetail,
             TodoFilter,
             TodoCounter,
             TodoAddForm,
             TodoSearchForm,
             TodoComponent) {
    'use strict';

    return angular
        .module('todoListApp', ['ngRoute'])
        .config(TodosConfig)
        .service('TodosState', TodosState)
        .factory('TodosService', TodosService)
        .component('todos', Todos)
        .component('todo', TodoComponent)
        .directive('ccpStop', ccpStop)
        .component('todoDetail', TodoDetail)
        .component('todoFilter', TodoFilter)
        .component('todoCounter', TodoCounter)
        .component('todoAddForm', TodoAddForm)
        .component('todoSearchForm', TodoSearchForm)
        .name;
});