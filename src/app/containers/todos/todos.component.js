define(function () {
    'use strict';

    require('./todos.css');

    var template = require('./todos.template.html');

    angular
        .module('todoListApp')
        .component('todos', {
            template: template,
            controller: TodosComponentController,
            controllerAs: 'todosCtrl'
        });

    function TodosComponentController(TodosState, TodosService, Logger) {
        'ngInject';

        var vm = this;

        vm.$onInit = onInit;
        vm.addTodo = addTodo;
        vm.removeTodo = removeTodo;
        vm.toggleTodo = toggleTodo;

        vm.getSearchTemplate = getSearchTemplate;

        function onInit() {
            return TodosService.getAll()
                .then(function (todos) {
                    TodosState.todos = todos.data;
                })
                .catch(function (err) {
                    TodosState.todos = [];
                    Logger.logError(err);
                });
        }

        function addTodo(todo) {
            return TodosService.add(todo)
                .then(function (res) {
                    TodosState.todos = TodosState.todos.concat(res.data)
                })
                .catch(function (err) {
                    Logger.logError(err);
                });
        }

        function removeTodo(todo) {
            return TodosService.remove(todo)
                .then(function () {
                    TodosState.todos = TodosState.todos.filter(function (t) {
                        return t.id !== todo.id;
                    });
                })
                .catch(function (err) {
                    Logger.logError(err);
                });
        }

        function toggleTodo(todo) {
            return TodosService.toggle(todo)
                .then(function () {
                    TodosState.todos = TodosState.todos.map(function (t) {
                        return t.id === todo.id ? Object.assign({}, t, {active: !t.active}) : t;
                    });
                })
                .catch(function (err) {
                    Logger.logError(err);
                });
        }

        function getSearchTemplate() {
            return TodosState.searchTemplate;
        }
    }
});