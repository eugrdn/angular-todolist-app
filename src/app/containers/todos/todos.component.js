define(function (require) {
    'use strict';

    require('./todos.css');

    var template = require('./todos.template.html');

    var TodosComponent = {
        template: template,
        controller: TodosComponentController
    };

    function TodosComponentController(TodosState, TodosService) {
        'ngInject';

        this.service = TodosService;
        this.state = TodosState;
    }

    TodosComponentController.prototype.$onInit = function () {
        var ctrl = this;

        return ctrl.service.getAll()
            .then(function (todos) {
                ctrl.state.todos = todos.data;
            })
            .catch(function (err) {
                ctrl.state.todos = [];
                console.error(err);
            });
    };

    TodosComponentController.prototype.addTodo = function (todo) {
        var ctrl = this;

        return ctrl.service.add(todo)
            .then(function (res) {
                ctrl.state.todos = ctrl.state.todos.concat(res.data)
            })
            .catch(function (err) {
                console.error(err);
            });
    };

    TodosComponentController.prototype.removeTodo = function (todo) {
        var ctrl = this;

        return ctrl.service.remove(todo)
            .then(function () {
                ctrl.state.todos = ctrl.state.todos.filter(function (t) {
                    return t.id !== todo.id;
                });
            })
            .catch(function (err) {
                console.error(err);
            });
    };

    TodosComponentController.prototype.toggleTodo = function (todo) {
        var ctrl = this;

        return ctrl.service.toggle(todo)
            .then(function () {
                ctrl.state.todos = ctrl.state.todos.map(function (t) {
                    return t.id === todo.id ? Object.assign({}, t, {active: !t.active}) : t;
                });
            })
            .catch(function (err) {
                console.error(err);
            });
    };

    return TodosComponent;
});