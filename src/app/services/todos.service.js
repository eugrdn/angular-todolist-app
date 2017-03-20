define(['shortid'], function (shortid) {
    'use strict';

    function TodosService($http) {
        var API = 'http://localhost:3004/todos';
        var FAKE_SERVER_RESPONSE = '505 Internal server error';

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
                .catch(function () {
                    Promise.reject(FAKE_SERVER_RESPONSE)
                });
        }

        function getTodo(id) {
            return $http
                .get(API + '/' + id)
                .catch(function () {
                    Promise.reject(FAKE_SERVER_RESPONSE)
                });
        }

        function addTodo(todo) {
            return $http
                .post(API, Object.assign({}, todo, {
                    description: '',
                    active: true,
                    id: shortid.generate()
                }))
                .catch(function () {
                    Promise.reject(FAKE_SERVER_RESPONSE)
                });
        }

        function toggleTodo(todo) {
            return $http
                .put(API + '/' + todo.id, {
                    title: todo.title,
                    created_at: todo.created_at,
                    description: todo.description,
                    active: !todo.active
                })
                .catch(function () {
                    Promise.reject(FAKE_SERVER_RESPONSE)
                });
        }

        function updateTodo(todo) {
            return $http
                .put(API + '/' + todo.id, {
                    title: todo.title,
                    created_at: todo.created_at,
                    description: todo.description,
                    active: todo.active
                })
                .catch(function () {
                    Promise.reject(FAKE_SERVER_RESPONSE)
                });
        }

        function removeTodo(todo) {
            return $http
                .delete(API + '/' + todo.id, {id: todo.id})
                .catch(function () {
                    Promise.reject(FAKE_SERVER_RESPONSE)
                });
        }
    }

    return TodosService;
});