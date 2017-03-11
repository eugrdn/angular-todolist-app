import template from './todo.template.html';

const TodoComponent = {
	bindings: {
		item: '<',
		onToggle: '&',
		onRemove: '&'
	},
	template,
	controller: class TodoComponent {
		isActive() {
			return this.item.active;
		}

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