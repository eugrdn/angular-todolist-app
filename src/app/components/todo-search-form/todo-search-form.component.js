define(function () {
    'use strict';

    var template = require('./todo-search-form.template.html');

    angular
        .module('todoListApp')
        .component('todoSearchForm', {
            bindings: {
                onChange: '&'
            },
            template: template,
            controller: TodoSearchFormController,
            controllerAs: 'searchFormCtrl'
        });

    function TodoSearchFormController() {
        var vm = this;

        vm.change = change;

        function change() {
            vm.onChange({
                template: vm.template
            });
        }
    }
});