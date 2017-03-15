describe('Todos factory', () => {
    const URL = 'http://localhost:3004/todos';
    let todos = ['lel', 'lel', 'lel'];

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

        it('should exist', () => {
            expect(TodosService.getAll).toBeDefined();
        });

        it('should fetch list of todos', () => {
            $httpBackend.whenGET(URL).respond({
                todos
            });

            TodosService.getAll().then(respond => {
                expect(respond.data.todos).toEqual(todos);
            });

            $httpBackend.flush();
        });
    })
});