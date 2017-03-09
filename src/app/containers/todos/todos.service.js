export default class TodosService {
	constructor($http) {
		'ngInject;'
		this.$http = $http;
	}

	getTodos() {
		return this.$http.get('http://localhost:3004/todos')
			.then(todos => todos.data)
			.then(todos => todos)
			.catch(err => Promise.reject(err));
	}
}