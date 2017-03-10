import angular from 'angular';

import TodosState from '../app/store/todos.state';

import TodosService from '../app/services/todos.service';

import TodosComponent from './containers/todos/todos.component';

import {
	Todo,
	TodoFilter,
	TodoCounter,
	TodoAddForm,
	TodoSearchForm
} from './components/index';

export const TodoAppModule = angular
	.module('todoListApp', [])
	.service('TodosState', TodosState)
	.factory('TodosService', TodosService)
	.component('todos', TodosComponent)
	.component('todo', Todo)
	.component('todoFilter', TodoFilter)
	.component('todoCounter', TodoCounter)
	.component('todoAddForm', TodoAddForm)
	.component('todoSearchForm', TodoSearchForm)
	.name;