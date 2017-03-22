define(['./todo-detail.template.html'], function (template) {
    'use strict';

    angular
        .module('todoListApp')
        .component('todoDetail', {
                template: template,
                controller: TodoDetailComponentController,
                controllerAs: 'vm'
            }
        );

    function TodoDetailComponentController($routeParams, TodosService) {
        'ngInject';

        var vm = this;

        vm.service = TodosService;
        vm.todo = {id: $routeParams.todoId};

        vm.$onInit = onInit;
        vm.submit = submit;

        function onInit() {
            return vm.service.get(vm.todo.id)
                .then(function (todo) {
                    vm.todo = todo.data;
                })
                .catch(function (err) {
                    vm.todo = {};
                    console.error(err);
                })
        }

        function submit() {
            return vm.service.update(vm.todo)
                .then(function (res) {
                    vm.todo = res.data;
                    alert(TASK_SAVE_INFORMATION(res.data.title));
                })
                .catch(function (err) {
                    alert(TASK_SAVE_INFORMATION());
                    console.error(err);
                });
        }
    }

    function TASK_SAVE_INFORMATION(title) {
        return title
            ? 'Todo ' + title + ' has been saved successfully!'
            : 'Oops! Todo hasn`t been saved!';
    }
});