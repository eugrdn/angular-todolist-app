import * as Filter from '../../constants/filter.constants';

var TodoFilterComponent = {
    bindings: {
        onChange: '&'
    },
    controller: function TodoFilterComponentController() {
        this.getFilter = function (event) {
            this.onChange({
                filter: event.target.dataset.id
            })
        }
    },
    template: '<div class="todo_filter">'
    + '<div role="toolbar" class="btn-toolbar">'
    + '<div class="btn-group btn-group-justified">'
    + '<button ng-click="$ctrl.getFilter($event)" data-id=' + Filter.ALL + ' data-switch-toggle="state" class="btn btn-default btn-outline"> All </button>'
    + '<button ng-click="$ctrl.getFilter($event)" data-id=' + Filter.ACTIVE + ' data-switch-toggle="state" class="btn btn-default btn-outline"> Active </button>'
    + '<button ng-click="$ctrl.getFilter($event)" data-id=' + Filter.COMPLETED + ' data-switch-toggle="state" class="btn btn-default btn-outline"> Completed </button>'
    + '</div></div></div>'
        .trim()
};

export default TodoFilterComponent;