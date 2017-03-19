'use strict';

describe('Todo search form tests', function () {
    var $componentController;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should accept a template string', function () {
        var bindings = {template: ''};
        var controller = $componentController('todoAddForm', null, bindings);

        expect(controller.template).toEqual(bindings.template);
    });
});