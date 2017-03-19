'use strict';

describe('Todo add form tests', function () {
    var $componentController;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should accept a submit handler as prop and invoke it when form sumbit', function () {
        var onSubmit = jasmine.createSpy('onSubmit');
        var bindings = {onSubmit: onSubmit};
        var controller = $componentController('todoAddForm', null, bindings);

        expect(controller.onSubmit).toEqual(bindings.onSubmit);

        controller.submit();

        expect(onSubmit).toHaveBeenCalled();
    });
});