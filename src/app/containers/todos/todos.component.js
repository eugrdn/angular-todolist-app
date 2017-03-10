import template from './todos.template.html'

import * as Filter from '../../constants/filter.constants';

import './todos.css';

const TodosComponent = {
	template,
	controller: class TodosComponent {
		constructor(TodosState, TodosService) {
			'ngInject';

			this.state = TodosState;
			this.service = TodosService;
		}

		$onInit() {
			this.service.get()
				.then(todos => {
					this.state.todos = todos.data;
				})
				.catch(err => {
					this.state.todos = [];
					console.error(err);
				})
		}

		addTodo(todo) {
			this.service.add(todo)
				.then(({ data }) => {
					this.state.todos = [
						...this.state.todos,
						{ ...data }
					]
				})
				.catch(err => console.err(err));
		}

		filterTodo(filter) {
			this.state.currentFilter = filter;

			if (filter === Filter.ALL) {
				this.state.searchTemplate = '';
			}
		}

		removeTodo(todo) {
			this.service.remove(todo)
				.then(() => {
					this.state.todos = [...this.state.todos.filter(t => t.id !== todo.id)];
				})
				.catch(err => console.error(err));
		}

		searchTodo(template) {
			if (template) {
				this.state.searchTemplate = template.replace(/[^(?!' )a-zA-zа-яА-я0-9]+/g, '').replace(/\s{2,}/, ' ').toLowerCase();
			} else {
				this.state.searchTemplate = '';
			}
		}

		toggleTodo(todo) {
			this.service.toggle(todo)
				.then(({ data }) => {
					this.state.todos = this.state.todos.map(t => t.id === data.id ? { ...data } : t);
				})
				.catch(err => console.error(err));
		}
	}
};

export default TodosComponent;
