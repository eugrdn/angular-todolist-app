define(function () {
    'use strict';

    var template = require('./todo-detail.template.html');

    angular
        .module('todoListApp')
        .component('todoDetail', {
                template: template,
                controller: TodoDetailComponentController,
                controllerAs: 'todoDetailCtrl'
            }
        );

    function TodoDetailComponentController($routeParams, TodosService, UserPopupService, Logger) {
        'ngInject';

        var vm = this;

        var successfulSave = 'Todo has been saved successfully!';
        var failedSave = 'Oops! Todo hasn`t been saved!';

        vm.todo = {id: $routeParams.todoId};

        vm.$onInit = onInit;
        vm.submit = submit;

        function onInit() {
            return TodosService.get(vm.todo.id)
                .then(function (todo) {
                    vm.todo = todo.data;
                })
                .catch(function (err) {
                    vm.todo = {};
                    Logger.logError(err);
                })
        }

        function submit() {
            return TodosService.update(vm.todo)
                .then(function (res) {
                    vm.todo = res.data;
                    UserPopupService.showAlertPopup(successfulSave);
                })
                .catch(function (err) {
                    UserPopupService.showAlertPopup(failedSave);
                    Logger.logError(err);
                });
        }
    }
});