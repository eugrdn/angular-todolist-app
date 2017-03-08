import template from './todo-search-form.template.html';

const TodoSearchFormComponent = {
	bindings: {
		onChange: '&'
	},
	template,
	controller: class TodoSearchFormComponent {
		change() {
			this.onChange({
				$event: {
					template: this.template
				}
			});
		}
	}
};

export default TodoSearchFormComponent;