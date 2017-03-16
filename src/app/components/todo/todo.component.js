import template from './todo.template.html';

const TodoComponent = {
	bindings: {
		item: '<',
		onToggle: '&',
		onRemove: '&'
	},
	template,
	controller: class TodoComponent {
		handleToggle() {
			this.onToggle({
				todo: this.item
			});
		}

		handleRemove() {
			this.onRemove({
				todo: this.item
			});
		}
	}
};

export default TodoComponent;