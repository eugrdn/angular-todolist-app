define(function () {
    'use strict';

    angular
        .module('todoListApp')
        .constant('filters', {
            ALL: 'filter_all',
            ACTIVE: 'filter_active',
            COMPLETED: 'filter_completed'
        });
});