import template from './todo-counter.template.html';

var TodoCounterComponent = {
    bindings: {
        counts: '<'
    },
    template: template
};

export default TodoCounterComponent;