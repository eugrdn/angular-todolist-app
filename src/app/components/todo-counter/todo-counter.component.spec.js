describe('Todo counter tests', function () {
    'use strict';

    var $componentController;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should return a known number of active todos', function () {
        var bindings = {counts: 2};
        var controller = $componentController('todoCounter', null, bindings);

        expect(controller.counts).toEqual(bindings.counts);
    });
});