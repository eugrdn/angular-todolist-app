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

    function TodoDetailComponentController($routeParams, TodosService, UserPopupService, Logger, popupMessages) {
        'ngInject';

        var vm = this;

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
                    UserPopupService.showAlertPopup(
                        popupMessages.SUCCESSFUL_SAVE
                    );
                })
                .catch(function (err) {
                    UserPopupService.showAlertPopup(
                        popupMessages.FAILED_SAVE
                    );
                    Logger.logError(err);
                });
        }
    }
});