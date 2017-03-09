import template from './todos.template.html'

import './todos.css';

const TodosComponent = {
	template,
	controller: class TodosComponent {
		constructor(TodosService) {
			'ngInject';
			
			this.todosService = TodosService;

			this.searchTemplate = '';
			this.currentFilter = ''
			this.todos = [];
		}

		$onInit() {
			this.todosService.getTodos().then((data) => {
				this.todos = data;
			})
		}

		addTodo({ todo }) {
			this.todosService.addTodo(todo);
		}

		filterTodo({ filter }) {
			this.currentFilter = filter;
		}

		removeTodo({ todo }) {
			this.todosService.removeTodo(todo);
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
