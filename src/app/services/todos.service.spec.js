describe('Todos factory', function () {
    'use strict';

    var API = 'http://localhost:3004/todos';
    var todos = [
        {title: '', id: 1},
        {title: '', id: 2}
    ];

    var $httpBackend;
    var TodosService;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_$httpBackend_, _TodosService_) {
        $httpBackend = _$httpBackend_;
        TodosService = _TodosService_;
    }));

    it('should exist', function () {
        expect(TodosService).toBeDefined();
    });

    describe('#getAll', function () {
        beforeEach(function () {
            $httpBackend
                .whenGET(API)
                .respond(todos);
        });

        it('should fetch list of exist todo`s', function () {
            TodosService.getAll().then(function (response) {
                expect(response.data).toEqual(todos);
            });

            $httpBackend.flush();
        });
    });

    describe('#get', function () {
        var id = 1;

        beforeEach(function () {
            spyOn(TodosService, 'get').and.callThrough();
        });

        beforeEach(function () {
            $httpBackend
                .whenGET(API + '/' + id)
                .respond(todos.find(function (t) {
                    return t.id === id;
                }));
        });

        it('should fetch todo with current id', function () {
            TodosService.get(id).then(function (response) {
                expect(response.data.id).toEqual(id);
            });

            $httpBackend.flush();

            expect(TodosService.get).toHaveBeenCalledWith(id);
        });
    });

    describe('#add', function () {
        var todo = {title: '', id: 3};

        beforeEach(function () {
            spyOn(TodosService, 'add').and.callThrough();
        });

        beforeEach(function () {
            $httpBackend
                .whenPOST(API)
                .respond(todos.concat(todo));
        });

        it('should add current todo to db', function () {
            TodosService.add(todo).then(function (response) {
                expect(response.data.pop()).toEqual(todo);
            });

            $httpBackend.flush();

            expect(TodosService.add).toHaveBeenCalledWith(todo);
        });
    });

    describe('#toggle', function () {
        var todo = {title: '', id: 2, active: true};

        beforeEach(function () {
            spyOn(TodosService, 'toggle').and.callThrough();
        });

        beforeEach(function () {
            $httpBackend
                .whenPUT(API + '/' + todo.id)
                .respond(Object.assign({}, todo));
        });

        it('should update todo `active` state to reverse', function () {
            TodosService.toggle(todo)
                .then(function (response) {
                    expect(response.data.active).toEqual(todo.active)
                });

            $httpBackend.flush();

            expect(TodosService.toggle).toHaveBeenCalledWith(todo);
        });
    });

    describe('#remove', function () {
        var todo = {title: '', id: 2};

        beforeEach(function () {
            spyOn(TodosService, 'remove').and.callThrough();
        });

        beforeEach(function () {
            $httpBackend
                .whenDELETE(API + '/' + todo.id)
                .respond(todos.filter(function (t) {
                    return t.id !== todo.id;
                }));
        });

        it('should remove todo with current id', function () {
            TodosService.remove(todo)
                .then(function (response) {
                    expect(response.data.find(function (t) {
                        return t.id === todo.id;
                    })).toBeUndefined();
                });

            $httpBackend.flush();

            expect(TodosService.remove).toHaveBeenCalledWith(todo);
        });
    });

    describe('#update', function () {
        var todo = {title: 'title', id: 1};

        beforeEach(function () {
            spyOn(TodosService, 'update').and.callThrough();
        });

        beforeEach(function () {
            $httpBackend
                .whenPUT(API + '/' + todo.id)
                .respond(Object.assign({}, todos.find(function (t) {
                    return t.id === todo.id
                }), {title: todo.title}));
        });

        it('should update todo with current id', function () {
            TodosService.update(todo).then(function (response) {
                expect(response.data).toEqual(todo);
            });

            $httpBackend.flush();

            expect(TodosService.update).toHaveBeenCalledWith(todo);
        });
    });
});