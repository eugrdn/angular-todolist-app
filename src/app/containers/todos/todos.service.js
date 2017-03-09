export default class TodosService {
	constructor($http) {
		'ngInject;'
		this.$http = $http;

		this.URL = 'http://localhost:3004/todos';
		this.ID = 4;
	}

	getTodos() {
		return this.$http.get(this.URL)
			.then(todos => todos.data)
			// .then(todos => todos)
			.catch(err => Promise.reject(err));
	}

	addTodo(todo) {
		this.$http.post(this.URL, {
			...todo, active: true, id: this.ID++
		});
	}

	removeTodo({ todo }) {
		//TODO
		// this.todos = this.todos.filter(t => t.id !== todo.id);
	}
}