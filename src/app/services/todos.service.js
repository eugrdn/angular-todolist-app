import shortid from 'shortid';
//TODO update todo when todoDetail 'save' request
const TodosService = ($http) => {
	const URL = 'http://localhost:3004/todos';
	const FAKE_SERVER_RESPONSE = '505 Internal server error'

	return {
		get: getTodos,
		add: addTodo,
		remove: removeTodo,
		toggle: toggleTodo
		//update
	}

	function getTodos() {
		return $http
			.get(URL)
			.catch(err => Promise.reject(FAKE_SERVER_RESPONSE));
	}

	function addTodo(todo) {
		return $http
			.post(URL, {
				...todo, active: true, id: shortid.generate()
			})
			.catch(err => Promise.reject(FAKE_SERVER_RESPONSE));
	}

	function toggleTodo({ id, title, active, created_at }) {
		return $http
			.put(`${URL}/${id}`, {
				title,
				created_at,
				active: !active
			})
			.catch(err => Promise.reject(FAKE_SERVER_RESPONSE));
	}

	function removeTodo({ id }) {
		return $http
			.delete(`${URL}/${id}`, { id })
			.catch(err => Promise.reject(FAKE_SERVER_RESPONSE));
	}
}

export default TodosService;