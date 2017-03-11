import template from './todo-detail.template.html';

const TASK_SAVE_INFORMATION = (title) =>
	title
		? `Todo "${title}" has been saved successfully!`
		: `Oops! Todo hasn't been saved!`;

const TodoDetailComponent = {
	template,
	controller: class TodoDetailComponent {
		constructor($routeParams, TodosState, TodosService) {
			'ngInject';

			this.state = TodosState;
			this.service = TodosService;

			this.todo = {
				id: $routeParams.todoId
			}
		}

		$onInit() {
			this.service.get(this.todo.id)
				.then(todo => {
					this.todo = todo.data;
				})
				.catch(err => {
					this.todo = {};
					console.error(err);
				})
		}

		submit() {
			this.service.update(this.todo)
				.then(({ data }) => {
					this.todo = data;
					alert(TASK_SAVE_INFORMATION(data.title));
				})
				.catch(err => {
					alert(TASK_SAVE_INFORMATION());
					console.error(err)
				});
		}
	}
};

export default TodoDetailComponent;