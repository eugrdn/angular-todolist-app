define(['./todo.template.html'], function (template) {
    'use strict';

    angular
        .module('todoListApp')
        .component('todo', {
            bindings: {
                item: '<',
                onToggle: '&',
                onRemove: '&'
            },
            template: template,
            controller: TodoComponentController,
            controllerAs: 'todoCtrl'
        });

    function TodoComponentController() {
        var vm = this;

        vm.handleToggle = handleToggle;
        vm.handleRemove = handleRemove;

        function handleToggle() {
            vm.onToggle({
                todo: vm.item
            });
        }

        function handleRemove() {
            vm.onRemove({
                todo: vm.item
            });
        }
    }
});