define(['./todo-counter.template.html'], function (template) {
    'use strict';

    return {
        bindings: {
            counts: '<'
        },
        template: template
    };
});