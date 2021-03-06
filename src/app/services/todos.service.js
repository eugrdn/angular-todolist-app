import shortid from 'shortid';

const TodosService = ($http) => {
    const API = 'http://localhost:3004/todos';
    const FAKE_SERVER_RESPONSE = '505 Internal server error';

    return {
        getAll: getAll,
        get: getTodo,
        add: addTodo,
        remove: removeTodo,
        toggle: toggleTodo,
        update: updateTodo
    };

    function getAll() {
        return $http
            .get(API)
            .catch(err => Promise.reject(FAKE_SERVER_RESPONSE));
    }

    function getTodo(id) {
        return $http
            .get(`${API}/${id}`)
            .catch(err => Promise.reject(FAKE_SERVER_RESPONSE));
    }

    function addTodo(todo) {
        return $http
            .post(API, {
                ...todo, description: '', active: true, id: shortid.generate()
            })
            .catch(err => Promise.reject(FAKE_SERVER_RESPONSE));
    }

    function toggleTodo({id, title, active, description, created_at}) {
        return $http
            .put(`${API}/${id}`, {
                title,
                created_at,
                description,
                active: !active
            })
            .catch(err => Promise.reject(FAKE_SERVER_RESPONSE));
    }

    function updateTodo({id, title, active, description, created_at}) {
        return $http.put(`${API}/${id}`, {
            title,
            created_at,
            active,
            description
        })
            .catch(err => Promise.reject(FAKE_SERVER_RESPONSE));
    }

    function removeTodo({id}) {
        return $http
            .delete(`${API}/${id}`, {id})
            .catch(err => Promise.reject(FAKE_SERVER_RESPONSE));
    }
};

export default TodosService;