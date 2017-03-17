'use strict';

import TodosConfig from './app.config';

import TodosState from '../app/store/todos.state';

import TodosService from '../app/services/todos.service';

import ccpStop from './directives/ccpStop.directive';

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

angular
    .module('todoListApp', ['ngRoute'])
    .config(TodosConfig)
    .service('TodosState', TodosState)
    .factory('TodosService', TodosService)
    .component('todos', Todos)
    .component('todo', Todo)
    .directive('ccpStop', ccpStop)
    .component('todoDetail', TodoDetail)
    .component('todoFilter', TodoFilter)
    .component('todoCounter', TodoCounter)
    .component('todoAddForm', TodoAddForm)
    .component('todoSearchForm', TodoSearchForm);