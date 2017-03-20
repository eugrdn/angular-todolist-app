define(['./todo.template.html'], function (template) {
    'use strict';

    return {
        bindings: {
            item: '<',
            onToggle: '&',
            onRemove: '&'
        },
        template: template,
        controller: function TodoComponent() {
            this.handleToggle = function () {
                this.onToggle({
                    todo: this.item
                });
            };
            this.handleRemove = function () {
                this.onRemove({
                    todo: this.item
                });
            };
        }
    };
});