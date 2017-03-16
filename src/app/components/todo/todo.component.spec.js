describe('Todo component tests', () => {
    let $componentController;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(_$componentController_ => {
        $componentController = _$componentController_;
    }));

    it('should expose a `todo` object', () => {
        const bindings = {item: {id: 1, title: ''}};
        const controller = $componentController('todo', null, bindings);

        expect(controller.item).toEqual(bindings.item);
    });

    it('should call the `#onToggle` binding, when #handleToggle calling', () => {
        const onToggle = jasmine.createSpy('onToggle');
        const bindings = {item: {}, onToggle};
        const controller = $componentController('todo', null, bindings);

        controller.handleToggle();

        expect(onToggle).toHaveBeenCalledWith({
            todo: controller.item
        });
    });

    it('should call the `#onRemove` binding, when #handleRemove calling', () => {
        const onRemove = jasmine.createSpy('onRemove');
        const bindings = {item: {}, onRemove};
        const controller = $componentController('todo', null, bindings);

        controller.handleRemove();

        expect(onRemove).toHaveBeenCalledWith({
            todo: controller.item
        });
    });
});