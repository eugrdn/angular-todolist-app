describe('Todos component tests', function () {
    'use strict';

    var controller;
    var service;
    var state;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_$componentController_, _TodosService_, _TodosState_) {
        controller = _$componentController_('todos');
        service = _TodosService_;
        state = _TodosState_;
    }));

    describe('#$onInit', function () {
        var todos = [{title: ''}];
        var fakeResponse;

        beforeEach(function () {
            fakeResponse = Promise.resolve({data: todos});
        });

        it('should call service`s #getAll and save responsed `todos` to state', function () {
            spyOn(service, 'getAll').and.returnValue(fakeResponse);

            controller.$onInit()
                .then(function () {
                    expect(state.todos).toEqual(todos);
                });

            expect(service.getAll).toHaveBeenCalled();
        });
    });

    describe('#addTodo', function () {
        var todos = [{title: ''}];
        var fakeResponse;

        beforeEach(function () {
            state.todos = [{title: ''}];
            fakeResponse = Promise.resolve({data: todos});
        });

        it('should call service`s #add and save responsed `todos` to state', function () {
            spyOn(service, 'add').and.returnValue(fakeResponse);

            controller.addTodo()
                .then(function () {
                    expect(state.todos.length).toBe(2);
                });

            expect(service.add).toHaveBeenCalled();
        });
    });

   /*
    describe('#removeTodo', function () {
        var fakeResponse;

        beforeEach(function () {
            fakeResponse = Promise.resolve([]);
        });

        it('should call service`s #remove', function () {
            spyOn(service, 'remove').and.returnValue(fakeResponse);

            controller.removeTodo();

            expect(service.remove).toHaveBeenCalled();
        });
    });

    describe('#toggleTodo', function () {
        var fakeResponse;

        beforeEach(function () {
            state.todos = [{title: '', active: false}];
            fakeResponse = Promise.resolve([]);
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
    */
});