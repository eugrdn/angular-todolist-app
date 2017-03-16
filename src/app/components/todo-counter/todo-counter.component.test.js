describe('Todo counter tests', ()=> {
    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(_$componentController_ => {
        $componentController = _$componentController_;
    }));

    it('should return a known number of active todos', () => {
        const bindings = {counts: 2};
        const controller = $componentController('todoCounter', null, bindings);

        expect(controller.counts).toEqual(bindings.counts);
    });
});