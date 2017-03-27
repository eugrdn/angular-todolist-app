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

    function TodosComponentController(TodosService, Logger) {
        'ngInject';

        var vm = this;

        vm.todos = [];
        vm.searchTemplate = '';

        vm.$onInit = onInit;

        vm.getSortedList = getSortedList;
        vm.getLeftItems = getLeftItems;
        vm.setSearchTemplate = setSearchTemplate;

        vm.addTodo = addTodo;
        vm.removeTodo = removeTodo;
        vm.toggleTodo = toggleTodo;
        vm.filterTodos = filterTodos;

        function onInit() {
            return TodosService.getAll()
                .then(function (todos) {
                    vm.todos = todos.data;
                })
                .catch(function (err) {
                    vm.todos = [];
                    Logger.logError(err);
                });
        }

        function setSearchTemplate(template) {
            vm.searchTemplate = template;
        }

        function getSortedList() {
            return vm.todos
                .filter(function (t) {
                    return t.title.toLowerCase().match(vm.searchTemplate);
                })
                .sort(function (a, b) {
                    return (a.active < b.active) || (a.created_at - b.created_at);
                });
        }

        function getLeftItems() {
            return vm.todos
                .filter(function (t) {
                    return t.active;
                })
                .length;
        }

        function addTodo(todo) {
            return TodosService.add(todo)
                .then(function (res) {
                    vm.todos = vm.todos.concat(res.data)
                })
                .catch(function (err) {
                    Logger.logError(err);
                });
        }

        function removeTodo(todo) {
            return TodosService.remove(todo)
                .then(function () {
                    vm.todos = vm.todos.filter(function (t) {
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
                    vm.todos = vm.todos.map(function (t) {
                        return t.id === todo.id ? Object.assign({}, t, {active: !t.active}) : t;
                    });
                })
                .catch(function (err) {
                    Logger.logError(err);
                });
        }

        function filterTodos(filter) {
            return TodosService.getFilteredTodos(filter)
                .then(function (todos) {
                    vm.todos = todos.data;
                })
                .catch(function (err) {
                    Logger.logError(err);
                });
        }
    }
});