var Filter = require('../constants/filter.constants');

function TodoStore() {
    this.todos = [];
    this.currentFilter = '';
    this.searchTemplate = '';
}

TodoStore.prototype.filteredList = function () {
    var fl;

    switch (this.currentFilter) {
        case Filter.ALL:
            fl = this.todos.slice();
            break;
        case Filter.ACTIVE:
            fl = this.todos.filter(function (item) {
                return item.active;
            });
            break;
        case Filter.COMPLETED:
            fl = this.todos.filter(function (item) {
                return !item.active
            });
            break;
        default:
            fl = this.todos.slice();
            break;
    }

    return fl
        .filter(function (t) {
            return t.title.toLowerCase().match(this.searchTemplate)
        })
        .sort(function (a, b) {
            return (a.active < b.active) || (a.created_at - b.created_at)
        });
};

TodoStore.prototype.leftItems = function () {
    return this.todos
        .filter(function (t) {
            return t.active
        })
        .length;
};
