describe('Todos factory', () => {
    const API = 'http://localhost:3004/todos';
    const todos = [
        {
            title: "Make coffee 😅",
            created_at: 1489181986308,
            active: false,
            description: "",
            id: "HJcQp9lie"
        },
        {
            title: "Drink coffee 😋",
            created_at: 1489181998933,
            active: false,
            description: "",
            id: "HJw4a9eol"
        }
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

    describe('#method getAll()', () => {
        let result;

        beforeEach(()=> {
            result = {};

            spyOn(TodosService, 'getAll').and.callThrough();
        });

        it('should fetch list of todos', () => {
            $httpBackend
                .whenGET(API)
                .respond(200, {todos});

            TodosService.getAll().then(_respond_ => {
                result = _respond_.data.todos;
            });

            $httpBackend.flush();

            expect(TodosService.getAll).toHaveBeenCalled();
            expect(result).toEqual(todos);
        });
    });

    describe('#method get()', ()=> {
        let result;

        beforeEach(()=> {
            result = {};

            spyOn(TodosService, 'get').and.callThrough();
        });

        it('should fetch todo with current id', () => {
            const id = "HJw4a9eol";

            $httpBackend
                .whenGET(`${API}/${id}`)
                .respond(200, {todos: todos.find(t => t.id === id)});

            TodosService.get(id).then(_respond_ => {
                result = _respond_.data.todos;
            });

            $httpBackend.flush();

            expect(TodosService.get).toHaveBeenCalledWith(id);
            expect(result.id).toEqual(id);
        });
    });

    describe('#method add()', ()=> {
        let result;

        beforeEach(()=> {
            result = {};

            spyOn(TodosService, 'add').and.callThrough();
        });

        it('should add current todo to db', () => {
            const todo = {
                title: "Do it again! 💫",
                created_at: 1489182011834,
                active: true,
                description: "Do it now!",
                id: "BJVrpqxsx"
            };

            $httpBackend
                .whenPOST(API)
                .respond(200, {todos: [...todos, todo]});

            TodosService.add(todo).then(_respond_ => {
                result = _respond_.data.todos;
            });

            $httpBackend.flush();

            expect(TodosService.add).toHaveBeenCalledWith(todo);
            expect(result).toEqual([...todos, todo]);
        });
    });

    describe('#method toggle()', ()=> {
        let result;

        beforeEach(()=> {
            result = {};

            spyOn(TodosService, 'toggle').and.callThrough();
        });

        it('should update todo `active` state to reverse', () => {
            const todo = {
                title: "Drink coffee 😋",
                created_at: 1489181998933,
                active: false,
                description: "",
                id: "HJw4a9eol"
            };

            $httpBackend
                .whenPUT(`${API}/${todo.id}`)
                .respond(200, {todos: todos.map(t => t.id === todo.id ? {t, active: !t.active} : t)});

            TodosService.get(todo.id).then(_respond_ => {
                result = _respond_.data.todos;
            });

            $httpBackend.flush();

            expect(TodosService.get).toHaveBeenCalledWith(todo);
            expect(result).toEqual([...todos.map(t => t.id === todo.id ? {t, active: !t.active} : t)]);
        });
    });

    fdescribe('#method remove()', ()=> {
        let result;

        beforeEach(()=> {
            result = {};

            spyOn(TodosService, 'remove').and.callThrough();
        });

        it('should remove todo with current id', () => {
            const id = "HJw4a9eol";

            $httpBackend
                .whenDELETE(`${API}/${id}`)
                .respond(200, {todos: todos.filter(t => t.id !== id)});

            TodosService.get(id).then(_respond_ => {
                result = _respond_.data.todos;
            });

            $httpBackend.flush();

            expect(TodosService.remove).toHaveBeenCalledWith(id);
            expect(result).toEqual(todos.filter(t => t.id !== id));
        });
    });
});