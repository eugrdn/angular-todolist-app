import template from './todo-counter.template.html';

const TodoCounterComponent = {
    bindings: {
        counts: '<'
    },
    template: template
};

export default TodoCounterComponent;