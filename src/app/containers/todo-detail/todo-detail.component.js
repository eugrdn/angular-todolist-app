import template from './todo-detail.template.html';

function TASK_SAVE_INFORMATION(title) {
    return title
        ? 'Todo ' + title + ' has been saved successfully!'
        : 'Oops! Todo hasn`t been saved!';
}

var TodoDetailComponent = {
    template: template,
    controller: function TodoDetailComponentController($routeParams, TodosService) {
        'ngInject';
        var ctrl = this;

        ctrl.service = TodosService;
        ctrl.todo = {id: $routeParams.todoId};

        ctrl.$onInit = function () {
            ctrl.service.get(ctrl.todo.id)
                .then(function (todo) {
                    ctrl.todo = todo.data;
                })
                .catch(function (err) {
                    ctrl.todo = {};
                    console.error(err);
                })
        };

        ctrl.submit = function () {
            ctrl.service.update(ctrl.todo)
                .then(function (res) {
                    ctrl.todo = res.data;
                    alert(TASK_SAVE_INFORMATION(res.data.title));
                })
                .catch(function (err) {
                    alert(TASK_SAVE_INFORMATION());
                    console.error(err);
                });
        };
    }
};

export default TodoDetailComponent;