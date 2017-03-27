describe('Todos component tests', function () {
    'use strict';

    var $q;

    var controller;
    var service;
    var state;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_$q_, _$componentController_, _TodosService_) {
        $q = _$q_;

        controller = _$componentController_('todos');
        service = _TodosService_;
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
                    expect(controller.todos).toEqual(todos);
                });

            expect(service.getAll).toHaveBeenCalled();
        });
    });

    describe('#addTodo', function () {
        var todos = [{}];
        var fakeResponse;

        beforeEach(function () {
            controller.todos = [{}];
            fakeResponse = $q.resolve({data: todos});
        });

        it('should call service`s #add and save fetched `todo` to state', function () {
            spyOn(service, 'add').and.returnValue(fakeResponse);

            controller.addTodo()
                .then(function () {
                    expect(controller.todos.length).toBe(2);
                });

            expect(service.add).toHaveBeenCalled();
        });
    });

    describe('#removeTodo', function () {
        var fakeResponse;

        beforeEach(function () {
            controller.todos = [{id: 1}];
            fakeResponse = $q.resolve();
        });

        it('should call service`s #remove, and delete current `todo` from state', function () {
            spyOn(service, 'remove').and.returnValue(fakeResponse);

            controller.removeTodo(controller.todos[0])
                .then(function () {
                    expect(controller.todos.length).toBe(0);
                });

            expect(service.remove).toHaveBeenCalledWith(controller.todos[0]);
        });
    });

    describe('#toggleTodo', function () {
        var fakeResponse;

        beforeEach(function () {
            controller.todos = [{active: false}];
            fakeResponse = $q.resolve([]);
        });

        it('should call service`s #toggle and save `todo` changes to state', function () {
            spyOn(service, 'toggle').and.returnValue(fakeResponse);

            controller.toggleTodo()
                .then(function () {
                    expect(controller.todos[0].active).toBe(true);
                });

            expect(service.toggle).toHaveBeenCalled();
        });
    });

    describe('#filterTodos', function () {
        var fakeResponse;
        var filter;

        beforeEach(function () {
            filter = '';
            todos = [{}, {}];
            fakeResponse = $q.resolve(todos);
        });

        it('should call service`s #getFilteredTodos with filter arg and save fetched `todos` to state', function () {
            spyOn(service, 'getFilteredTodos').and.returnValue(fakeResponse);

            controller.filterTodos(filter)
                .then(function () {
                    expect(controller.todos).toEqual(todos);
                });

            expect(service.toggle).toHaveBeenCalledWith(filter);
        });
    });

    describe('#getLeftItems', function () {
        it('should return number of active todos', function () {
            controller.todos = [
                {title: '', active: true},
                {title: '', active: false}
            ];

            expect(controller.getLeftItems()).toBe(1);
        });
    });

    describe('#getSortedList', function () {
        it('should return todos in right order', function () {
            controller.todos = [
                {title: '', active: false, created_at: 2},
                {title: '', active: true, created_at: 1}
            ];

            expect(controller.getSortedList()).toEqual(controller.todos.reverse());
        });
    });
});