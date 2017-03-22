define(['./todo-add-form.template.html'], function (template) {
    'use strict';

    angular
        .module('todoListApp')
        .component('todoAddForm', {
            bindings: {
                onSubmit: '&'
            },
            template: template,
            controller: TodoAddFormComponentController,
            controllerAs: 'vm'
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
