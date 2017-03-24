define(function () {
    'use strict';

    var template = require('./todo-add-form.template.html');

    angular
        .module('todoListApp')
        .component('todoAddForm', {
            bindings: {
                onSubmit: '&'
            },
            template: template,
            controller: TodoAddFormComponentController,
            controllerAs: 'addFormCtrl'
        });

    function TodoAddFormComponentController() {
        var vm = this;

        vm.submit = submit;

        function submit() {
            vm.onSubmit({
                todo: {
                    title: vm.todoTitle,
                    created_at: Date.now()
                }
            });
            vm.todoTitle = '';
        }
    }
});
