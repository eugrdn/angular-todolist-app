import template from './todo.template.html';

var TodoComponent = {
    bindings: {
        item: '<',
        onToggle: '&',
        onRemove: '&'
    },
    template: template,
    controller: TodoComponentController
};

function TodoComponentController() {
}

TodoComponentController.prototype.handleToggle = function () {
    this.onToggle({
        todo: this.item
    });
};

TodoComponentController.prototype.handleRemove = function () {
    this.onRemove({
        todo: this.item
    });
};

export default TodoComponent;