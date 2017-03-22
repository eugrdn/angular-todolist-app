define(['./todo-filter.template.html'], function (template) {
    'use strict';

    angular
        .module('todoListApp')
        .component('todoFilter', {
            bindings: {
                onChange: '&'
            },
            template: template,
            controller: TodoFilterComponentController,
            controllerAs: 'vm'
        });

    function TodoFilterComponentController(filters) {
        'ngInject';

        var vm = this;

        vm.filters = filters;
        vm.getFilter = getFilter;

        function getFilter(event) {
            vm.onChange({
                filter: event.target.dataset.id
            })
        }
    }
});