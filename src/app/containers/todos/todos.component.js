import template from './todos.template.html'

import './todos.css';

const TodosComponent = {
	template,
	controller: class TodosComponent {
		constructor() {
			'ngInject';
			this.ID = 0;

			this.searchTemplate = '';
			this.currentFilter = ''

			this.todos = [
				{ id: this.ID++, title: 'Make coffee...', active: true, created_at: 1482002925968 },
				{ id: this.ID++, title: 'Drink coffee...', active: false, created_at: 1482002969831 },
				{ id: this.ID++, title: 'Do it again...', active: false, created_at: 1482002976473 }
			];
		}

		addTodo({ todo }) {
			this.todos = [...this.todos, { ...todo, active: true, id: this.ID++ }];
		}

		filterTodo({ filter }) {
			this.currentFilter = filter;
		}

		removeTodo({ todo }) {
			this.todos = this.todos.filter(t => t.id !== todo.id);
		}

		searchTodo({ template }) {
			if (template) {
				this.searchTemplate = template.replace(/[^(?!' )a-zA-zа-яА-я0-9]+/g, '').replace(/\s{2,}/, ' ').toLowerCase();
				this.currentFilter = 'find';
			} else {
				this.currentFilter = 'all'
			}
		}

		toggleTodo({ todo }) {
			this.todos = this.todos.map(t => t.id === todo.id ? { ...t, active: !t.active } : t);
		}

		get filteredList() {
			let fl;

			switch (this.currentFilter) {
				case 'all':
					fl = this.todos.slice();
					break;
				case 'active':
					fl = this.todos.filter(item => item.active);
					break;
				case 'completed':
					fl = this.todos.filter(item => !item.active);
					break;
				case 'find':
					fl = this.todos.filter(elt => elt.title.toLowerCase().match(this.searchTemplate));
					break;
				default:
					fl = this.todos.slice();
					break;
			}

			return fl.sort((a, b) => (a.active < b.active) || (a.created_at - b.created_at));
		}

		get leftItems() {
			return this.todos.filter(t => t.active).length;
		}
	}
};

export default TodosComponent;
