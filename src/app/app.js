import angular from 'angular'
import todoList from '../todo-list/todo-list.module';

const ROOT_MODULE = 'todoListApp';

angular.module(ROOT_MODULE, [
	todoList
]);

export default ROOT_MODULE;