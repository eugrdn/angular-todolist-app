import template from './todos.template.html'

const TodosComponent = {
	template,
	controller: class TodosComponent {
		constructor() {
			'ngInject';
			this.todos = [
				{ id: 1, title: 'make coffee', active: false, description: 'Huhuhue' },
				{ id: 2, title: 'drink coffee', active: true, description: 'Glug, glug, glug' },
				{ id: 3, title: 'do it again', active: true, description: '' }
			];
		}
	}
};

export default TodosComponent;
