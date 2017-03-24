define(function () {
    'use strict';

    var template = require('./todo-filter.template.html');

    angular
        .module('todoListApp')
        .component('todoFilter', {
            bindings: {
                onChange: '&'
            },
            template: template,
            controller: TodoFilterComponentController,
            controllerAs: 'filterCtrl'
        });

    function TodoFilterComponentController(filters) {
        'ngInject';

        var vm = this;

        vm.filters = filters;
        vm.getFilter = getFilter;

        function getFilter(event) {
            vm.onChange({
                filter: event.target.dataset.id
            });
        }
    }
});