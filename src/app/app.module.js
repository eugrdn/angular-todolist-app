import angular from 'angular'

import TodosComponent from './containers/todos/todos.component';

import {
	Todo,
	TodoFilter,
	TodoCounter,
	TodoAddForm,
	TodoSearchForm
} from './components/index';

import TodosService from '../app/containers/todos/todos.service';

export const TodoAppModule = angular
	.module('todoListApp', [])
	.component('todo', Todo)
	.component('todos', TodosComponent)
	.component('todoFilter', TodoFilter)
	.component('todoCounter', TodoCounter)
	.component('todoAddForm', TodoAddForm)
	.component('todoSearchForm', TodoSearchForm)
	.service('TodosService', TodosService)
	.name;