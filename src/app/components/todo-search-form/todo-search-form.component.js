define(function () {
    'use strict';

    var template = require('./todo-search-form.template.html');

    angular
        .module('todoListApp')
        .component('todoSearchForm', {
            bindings: {
                searchTemplate: '='
            },
            template: template
        });
});