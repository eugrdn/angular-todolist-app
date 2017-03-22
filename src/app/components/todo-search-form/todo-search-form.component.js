define(['./todo-search-form.template.html'], function (template) {
    'use strict';

    angular
        .module('todoListApp')
        .component('todoSearchForm', {
            bindings: {
                template: '='
            },
            template: template
        });
});