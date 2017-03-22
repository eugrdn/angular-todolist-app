define(function () {
    'use strict';

    angular
        .module('todoListApp')
        .service('TodosState', TodosState);

    function TodosState(filters) {
        'ngInject';

        var vm = this;

        vm.todos = [];
        vm.currentFilter = '';
        vm.searchTemplate = '';

        vm.getFilteredList = getFilteredList;
        vm.getLeftItems = getLeftItems;
        vm.setFilter = setFilter;

        function getFilteredList() {
            var fl;

            switch (vm.currentFilter) {
                case filters.ALL:
                    fl = vm.todos.slice();
                    break;
                case filters.ACTIVE:
                    fl = vm.todos.filter(function (item) {
                        return item.active;
                    });
                    break;
                case filters.COMPLETED:
                    fl = vm.todos.filter(function (item) {
                        return !item.active;
                    });
                    break;
                default:
                    fl = vm.todos.slice();
                    break;
            }

            return fl
                .filter(function (t) {
                    return t.title.toLowerCase().match(vm.searchTemplate);
                })
                .sort(function (a, b) {
                    return (a.active < b.active) || (a.created_at - b.created_at);
                });
        }

        function getLeftItems() {
            return vm.todos
                .filter(function (t) {
                    return t.active;
                })
                .length;
        }

        function setFilter(filter) {
            vm.currentFilter = filter;

            if (filter === filters.ALL) {
                vm.searchTemplate = '';
            }
        }
    }
});
