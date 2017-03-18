import template from './todo.template.html';

var TodoComponent = {
    bindings: {
        item: '<',
        onToggle: '&',
        onRemove: '&'
    },
    template: template,
    controller: function TodoComponentController() {
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

export default TodoComponent;