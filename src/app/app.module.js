'use strict';

var TodosConfig = require('./app.config');

var TodosState  = require('../app/store/todos.state');

var TodosService  = require( '../app/services/todos.service');

var ccpStop  = require( './directives/ccpStop.directive');

import {
    Todos,
    TodoDetail
} from './containers/index';

import {
    Todo,
    TodoFilter,
    TodoCounter,
    TodoAddForm,
    TodoSearchForm
} from './components/index';

export const TodoAppModule = angular
    .module('todoListApp', ['ngRoute'])
    .config(TodosConfig)
    .service('TodosState', TodosState)
    .factory('TodosService', TodosService)
    .component('todos', Todos)
    .component('todo', Todo)
    .directive('ccpStop', () => new ccpStop())
    .component('todoDetail', TodoDetail)
    .component('todoFilter', TodoFilter)
    .component('todoCounter', TodoCounter)
    .component('todoAddForm', TodoAddForm)
    .component('todoSearchForm', TodoSearchForm)
    .name;