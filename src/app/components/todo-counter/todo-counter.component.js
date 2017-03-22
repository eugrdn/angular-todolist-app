define(['./todo-counter.template.html'], function (template) {
    'use strict';

    angular
        .module('todoListApp')
        .component('todoCounter', {
            bindings: {
                counts: '<'
            },
            template: template
        });
});