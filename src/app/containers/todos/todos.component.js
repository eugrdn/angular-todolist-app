define([
    './todos.template.html',
    './todos.css'
], function (template) {
    'use strict';

    angular
        .module('todoListApp')
        .component('todos', {
            template: template,
            controller: TodosComponentController,
            controllerAs: 'todosCtrl'
        });

    function TodosComponentController(TodosState, TodosService) {
        'ngInject';

        var vm = this;

        vm.service = TodosService;
        vm.state = TodosState;

        vm.$onInit = onInit;
        vm.addTodo = addTodo;
        vm.removeTodo = removeTodo;
        vm.toggleTodo = toggleTodo;

        function onInit() {
            return vm.service.getAll()
                .then(function (todos) {
                    vm.state.todos = todos.data;
                })
                .catch(function (err) {
                    vm.state.todos = [];
                    console.error(err);
                });
        }

        function addTodo(todo) {
            return vm.service.add(todo)
                .then(function (res) {
                    vm.state.todos = vm.state.todos.concat(res.data)
                })
                .catch(function (err) {
                    console.error(err);
                });
        }

        function removeTodo(todo) {
            return vm.service.remove(todo)
                .then(function () {
                    vm.state.todos = vm.state.todos.filter(function (t) {
                        return t.id !== todo.id;
                    });
                })
                .catch(function (err) {
                    console.error(err);
                });
        }

        function toggleTodo(todo) {
            return vm.service.toggle(todo)
                .then(function () {
                    vm.state.todos = vm.state.todos.map(function (t) {
                        return t.id === todo.id ? Object.assign({}, t, {active: !t.active}) : t;
                    });
                })
                .catch(function (err) {
                    console.error(err);
                });
        }
    }
});