import * as Filter from '../constants/filter.constants';

function TodoStore() {
    this.todos = [];
    this.currentFilter = '';
    this.searchTemplate = '';
}

TodoStore.prototype.filteredList = function () {
    var self = this;
    var fl;

    switch (self.currentFilter) {
        case Filter.ALL:
            fl = self.todos.slice();
            break;
        case Filter.ACTIVE:
            fl = self.todos.filter(function (item) {
                return item.active;
            });
            break;
        case Filter.COMPLETED:
            fl = self.todos.filter(function (item) {
                return !item.active;
            });
            break;
        default:
            fl = self.todos.slice();
            break;
    }

    return fl
        .filter(function (t) {
            return t.title.toLowerCase().match(self.searchTemplate);
        })
        .sort(function (a, b) {
            return (a.active < b.active) || (a.created_at - b.created_at);
        });
};

TodoStore.prototype.leftItems = function () {
    return this.todos
        .filter(function (t) {
            return t.active;
        })
        .length;
};

export default TodoStore;