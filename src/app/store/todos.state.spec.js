'use strict';

describe('Todos state tests', function () {
    var state;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_TodosState_) {
        state = _TodosState_;
    }));

    describe('#setFilter', function () {
        it('should set new filter string', function () {
            var filter = 'all';

            state.setFilter(filter);
            expect(state.currentFilter).toBe(filter);
        });
    });

    describe('#getLeftItems', function () {
        it('should return number of active todos', function () {
            state.todos = [
                {title: '', active: true},
                {title: '', active: false}
            ];

            expect(state.getLeftItems()).toBe(1);
        });
    });

    describe('#getFilteredList', function () {
        beforeEach(function () {
            state.todos = [
                {title: 'abc', active: true},
                {title: 'aac', active: false}
            ];
            state.currentFilter = '';
            state.searchTemplate = '';
        });

        it('should return an array of active todos if the current filter is `active`', function () {
            state.currentFilter = 'filter_active';

            expect(state.getFilteredList()).toEqual([
                state.todos[0]
            ]);
        });

        it('should return an array of completed todos if the current filter is `completed`', function () {
            state.currentFilter = 'filter_completed';

            expect(state.getFilteredList()).toEqual([
                state.todos[1]
            ]);
        });

        it('should return an array of all todos if the current filter is `all` or default', function () {
            state.currentFilter = '';
            expect(state.getFilteredList()).toEqual(state.todos);

            state.currentFilter = 'filter_all';
            expect(state.getFilteredList()).toEqual(state.todos);
        });

        it('should return an array of todos which title match to `search template` value', function () {
            state.searchTemplate = 'ab';
            expect(state.getFilteredList()).toEqual([
                state.todos[0]
            ]);
        });
    });
});