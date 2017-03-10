import template from './todo-add-form.template.html';

const TodoAddFormComponent = {
	bindings: {
		onSubmit: '&'
	},
	template,
	controller: class TodoAddFormComponent {
		submit() {
			this.onSubmit({
				todo: {
					title: this.todoTitle,
					created_at: Date.now()
				}
			});
			this.todoTitle = '';
		}
	}
};

export default TodoAddFormComponent;