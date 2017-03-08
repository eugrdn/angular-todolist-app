import template from './todo-filter.template.html';

const TodoFilterComponent = {
	bindings: {
		onChange: '&'
	},
	template,
	controller: class TodoFilterComponent {
		filter(event) {
			this.onChange({
				$event: {
					filter: event.target.dataset.id
				}
			})
		}
	}
};

export default TodoFilterComponent;