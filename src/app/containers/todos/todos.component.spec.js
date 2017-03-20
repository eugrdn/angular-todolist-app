describe('Todos component tests', function () {
    'use strict';

    var $q;

    var controller;
    var service;
    var state;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_$q_, _$componentController_, _TodosService_, _TodosState_) {
        $q = _$q_;

        controller = _$componentController_('todos');
        service = _TodosService_;
        state = _TodosState_;
    }));

    describe('#$onInit', function () {
        var todos = [{}, {}];
        var fakeResponse;

        beforeEach(function () {
            fakeResponse = $q.resolve({data: todos});
        });

        it('should call service`s #getAll and save fetched `todos` to state', function () {
            spyOn(service, 'getAll').and.returnValue(fakeResponse);

            controller.$onInit()
                .then(function () {
                    expect(state.todos).toEqual(todos);
                });

            expect(service.getAll).toHaveBeenCalled();
        });
    });

    describe('#addTodo', function () {
        var todos = [{}];
        var fakeResponse;

        beforeEach(function () {
            state.todos = [{}];
            fakeResponse = $q.resolve({data: todos});
        });

        it('should call service`s #add and save fetched `todo` to state', function () {
            spyOn(service, 'add').and.returnValue(fakeResponse);

            controller.addTodo()
                .then(function () {
                    expect(state.todos.length).toBe(2);
                });

            expect(service.add).toHaveBeenCalled();
        });
    });

    describe('#removeTodo', function () {
        var fakeResponse;

        beforeEach(function () {
            state.todos = [{id: 1}];
            fakeResponse = $q.resolve();
        });

        it('should call service`s #remove, and delete current `todo` from state', function () {
            spyOn(service, 'remove').and.returnValue(fakeResponse);

            controller.removeTodo(state.todos[0])
                .then(function () {
                    expect(state.todos.length).toBe(0);
                });

            expect(service.remove).toHaveBeenCalledWith(state.todos[0]);
        });
    });

    describe('#toggleTodo', function () {
        var fakeResponse;

        beforeEach(function () {
            state.todos = [{active: false}];
            fakeResponse = $q.resolve([]);
        });

        it('should call service`s #toggle and save `todo` changes to state', function () {
            spyOn(service, 'toggle').and.returnValue(fakeResponse);

            controller.toggleTodo()
                .then(function () {
                    expect(state.todos[0].active).toBe(true);
                });

            expect(service.toggle).toHaveBeenCalled();
        });
    });
});