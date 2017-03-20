define(['./todo-add-form.template.html'], function (template) {
    'use strict';

    return {
        bindings: {
            onSubmit: '&'
        },
        template: template,
        controller: function TodoAddFormComponent() {
            this.submit = function () {
                this.onSubmit({
                    todo: {
                        title: this.todoTitle,
                        created_at: Date.now()
                    }
                });
                this.todoTitle = '';
            };
        }
    };
});
