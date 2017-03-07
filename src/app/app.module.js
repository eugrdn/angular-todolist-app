import angular from 'angular'

import TodosComponent from './containers/todos/todos.component';

import {
	Todo,
	TodoList,
	TodoFilter,
	TodoCounter,
	TodoAddForm,
	TodoSearchForm
} from './components/index';

export const TodoAppModule = angular
	.module('todoListApp', [])
	.component('todos', TodosComponent)
	.component('todo', Todo)
	.component('todoList', TodoList)
	.component('todoFilter', TodoFilter)
	.component('todoCounter', TodoCounter)
	.component('todoAddForm', TodoAddForm)
	.component('todoSearchForm', TodoSearchForm)
	.name;