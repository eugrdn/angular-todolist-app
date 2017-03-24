define(function () {
    'use strict';

    var template = require('./todo-counter.template.html');

    angular
        .module('todoListApp')
        .component('todoCounter', {
            bindings: {
                counts: '<'
            },
            template: template
        });
});