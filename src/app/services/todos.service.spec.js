describe('Todos factory', () => {
    const API = 'http://localhost:3004/todos';
    let todos = [
        {title: '', id: 1},
        {title: '', id: 2}
    ];

    let TodosService;
    let $httpBackend;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject((_TodosService_, _$httpBackend_) => {
        TodosService = _TodosService_;
        $httpBackend = _$httpBackend_;
    }));

    it('should exist', () => {
        expect(TodosService).toBeDefined();
    });

    describe('#getAll', () => {
        beforeEach(() => {
            $httpBackend
                .whenGET(API)
                .respond(todos);
        });

        it('should fetch list of exist todo`s', () => {
            TodosService.getAll().then(response => {
                expect(response.data).toEqual(todos);
            });

            $httpBackend.flush();
        });
    });

    describe('#get', () => {
        const id = 1;

        beforeEach(() => {
            spyOn(TodosService, 'get').and.callThrough();
        });

        beforeEach(() => {
            $httpBackend
                .whenGET(`${API}/${id}`)
                .respond(todos.find(t => t.id === id));
        });

        it('should fetch todo with current id', () => {
            TodosService.get(id).then(response => {
                expect(response.data.id).toEqual(id);
            });

            $httpBackend.flush();

            expect(TodosService.get).toHaveBeenCalledWith(id);
        });
    });

    describe('#add', () => {
        const todo = {title: '', id: 3};

        beforeEach(() => {
            spyOn(TodosService, 'add').and.callThrough();
        });

        beforeEach(() => {
            $httpBackend
                .whenPOST(API)
                .respond([...todos, todo]);
        });

        it('should add current todo to db', () => {
            TodosService.add(todo).then(response => {
                expect(response.data.pop()).toEqual(todo);
            });

            $httpBackend.flush();

            expect(TodosService.add).toHaveBeenCalledWith(todo);
        });
    });

    xdescribe('#toggle', () => {
        const todo = {title: '', id: 2};

        beforeEach(() => {
            $httpBackend
                .whenPUT(`${API}/${todo.id}`)
                .respond();
        });

        beforeEach(() => {
            spyOn(TodosService, 'toggle').and.callThrough();
        });

        it('should update todo `active` state to reverse', () => {
            TodosService.get(todo.id);

            $httpBackend.flush();

            expect(TodosService.get).toHaveBeenCalledWith(todo.id);
        });
    });

    xdescribe('#remove', () => {
        const id = 3;

        beforeEach(() => {
            spyOn(TodosService, 'remove').and.callThrough();
        });

        beforeEach(() => {
            $httpBackend
                .whenDELETE(`${API}/${id}`)
                .respond(todos.filter(t => t.id !== id));
        });

        it('should remove todo with current id', () => {
            TodosService.get(id).then(response => {
                expect(response.data.find(t => t.id === id)).toBeUndefined();
            });

            $httpBackend.flush();

            expect(TodosService.remove).toHaveBeenCalledWith(id);
        });
    });

    xdescribe('#update', () => {
        const todo = {title: 'title', id: 1};

        beforeEach(() => {
            spyOn(TodosService, 'update').and.callThrough();
        });

        beforeEach(() => {
            $httpBackend
                .whenPUT(`${API}/${todo.id}`)
                .respond(todos.map(t => t.id === todo.id ? todo : t));
        });

        it('should update todo with current id', () => {
            TodosService.get(todo.id).then(response => {
                expect(response.data).toEqual(todo);
            });

            $httpBackend.flush();

            expect(TodosService.update).toHaveBeenCalledWith(todo.id);
        });
    });
});