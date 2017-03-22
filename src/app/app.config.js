define(function () {
    'use strict';

    angular
        .module('todoListApp')
        .config(TodosConfig);

    function TodosConfig($routeProvider, $locationProvider) {
        'ngInject';

        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/todos', {
                template: '<todos></todos>'
            })
            .when('/todos/:todoId', {
                template: '<todo-detail></todo-detail>'
            })
            .otherwise('/todos');
    }
});
