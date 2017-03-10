import * as Filter from '../constants/filter.constants';

export default class TodoStore {
	constructor() {
		this.todos = [];
		this.currentFilter = '';
		this.searchTemplate = '';
	}

	//change with get q
	get filteredList() {
		let fl;

		switch (this.currentFilter) {
			case Filter.ALL:
				fl = this.todos.slice();
				break;
			case Filter.ACTIVE:
				fl = this.todos.filter(item => item.active);
				break;
			case Filter.COMPLETED:
				fl = this.todos.filter(item => !item.active);
				break;
			default:
				fl = this.todos.slice();
				break;
		}

		return fl
			.filter(t => t.title.toLowerCase().match(this.searchTemplate))
			.sort((a, b) => (a.active < b.active) || (a.created_at - b.created_at));
	}

	get leftItems() {
		return this.todos.filter(t => t.active).length;
	}
}