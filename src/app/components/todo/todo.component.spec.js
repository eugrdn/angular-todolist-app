'use strict';

describe('Todo component tests', function () {
    var $componentController;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should expose a `todo` object', function () {
        var bindings = {item: {id: 1, title: ''}};
        var controller = $componentController('todo', null, bindings);

        expect(controller.item).toEqual(bindings.item);
    });

    it('should call the `#onToggle` binding, when #handleToggle calling', function () {
        var onToggle = jasmine.createSpy('onToggle');
        var bindings = {item: {}, onToggle: onToggle};
        var controller = $componentController('todo', null, bindings);

        controller.handleToggle();

        expect(onToggle).toHaveBeenCalledWith({
            todo: controller.item
        });
    });

    it('should call the `#onRemove` binding, when #handleRemove calling', function () {
        var onRemove = jasmine.createSpy('onRemove');
        var bindings = {item: {}, onRemove: onRemove};
        var controller = $componentController('todo', null, bindings);

        controller.handleRemove();

        expect(onRemove).toHaveBeenCalledWith({
            todo: controller.item
        });
    });
});