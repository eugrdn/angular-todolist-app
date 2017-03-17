import template from './todo-add-form.template.html';

const TodoAddFormComponent = {
    bindings: {
        onSubmit: '&'
    },
    template: template,
    controller: TodoAddFormComponentController
};

function TodoAddFormComponentController() {
}

TodoAddFormComponentController.prototype.submit = function () {
    this.onSubmit({
        todo: {
            title: this.todoTitle,
            created_at: Date.now()
        }
    });
    this.todoTitle = '';
};

export default TodoAddFormComponent;