describe('Todo component tests', () => {
    let $componentController;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(_$componentController_ => {
        $componentController = _$componentController_;
    }));

    it('should expose a `todo` object', () => {
        const bindings = {item: {id: 'HJcQp9lie', title: 'title'}};
        const controller = $componentController('todo', null, bindings);

        expect(controller.item).toEqual(bindings.item);
    });

    it('should return a state of `todo` object when `#isActive` calling', () => {
        const bindings = {item: {id: 'HJcQp9lie', title: 'title', active: false}};
        const controller = $componentController('todo', null, bindings);

        expect(controller.isActive()).toEqual(controller.item.active);
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