describe('Todos factory', function () {
    var API = 'http://localhost:3004/todos';
    var todos = [
        {title: '', id: 1},
        {title: '', id: 2}
    ];

    var TodosService;
    var $httpBackend;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_TodosService_, _$httpBackend_) {
        TodosService = _TodosService_;
        $httpBackend = _$httpBackend_;
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

    xdescribe('#toggle', function () {
        var todo = {title: '', id: 2};

        beforeEach(function () {
            $httpBackend
                .whenPUT(API + '/' + todo.id)
                .respond();
        });

        beforeEach(function () {
            spyOn(TodosService, 'toggle').and.callThrough();
        });

        it('should update todo `active` state to reverse', function () {
            TodosService.get(todo.id);

            $httpBackend.flush();

            expect(TodosService.get).toHaveBeenCalledWith(todo.id);
        });
    });

    xdescribe('#remove', function () {
        var id = 3;

        beforeEach(function () {
            spyOn(TodosService, 'remove').and.callThrough();
        });

        beforeEach(function () {
            $httpBackend
                .when(API + '/' + id)
                .respond(todos.filter(function (t) {
                    return t.id !== id;
                }));
        });

        it('should remove todo with current id', function () {
            TodosService.get(id).then(function (response) {
                expect(response.data.find(function (t) {
                    return t.id === id;
                })).toBeUndefined();
            });

            $httpBackend.flush();

            expect(TodosService.remove).toHaveBeenCalledWith(id);
        });
    });

    xdescribe('#update', function () {
        var todo = {title: 'title', id: 1};

        beforeEach(function () {
            spyOn(TodosService, 'update').and.callThrough();
        });

        beforeEach(function () {
            $httpBackend
                .whenPUT(API + '/' + todo.id)
                .respond(todos.map(function (t) {
                    return t.id === todo.id ? todo : t;
                }));
        });

        it('should update todo with current id', function () {
            TodosService.get(todo.id).then(function (response) {
                expect(response.data).toEqual(todo);
            });

            $httpBackend.flush();

            expect(TodosService.update).toHaveBeenCalledWith(todo.id);
        });
    });
});