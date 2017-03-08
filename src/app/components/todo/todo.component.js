import template from './todo.template.html';

const TodoComponent = {
	bindings: {
		item: '<',
		onToggle: '&',
		onRemove: '&'
	},
	template,
	controller: class TodoComponent {
		constructor() {
			'ngInject';
		}

		isActive() {
			return this.item.active;
		}

		handleToggle() {
			this.onToggle({
				$event: {
					todo: this.item
				}
			});
		}

		handleRemove() {
			this.onRemove({
				$event: {
					todo: this.item
				}
			});
		}
	}
};

export default TodoComponent;