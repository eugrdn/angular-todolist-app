import template from './todo-add-form.template.html';

var TodoAddFormComponent = {
    bindings: {
        onSubmit: '&'
    },
    template: template,
    controller: function TodoAddFormComponentController() {
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

export default TodoAddFormComponent;

