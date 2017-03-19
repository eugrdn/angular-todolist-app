'use strict';

describe('Todo filter component test', function () {
    var $componentController;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should call the `#onChange` callback, when #getFilter calling', function () {
        var onChange = jasmine.createSpy('onChange');
        var bindings = {onChange: onChange};
        var controller = $componentController('todoFilter', null, bindings);

        var fakeEventObj = {target: {dataset: {id: 'filter'}}};
        controller.getFilter(fakeEventObj);

        expect(onChange).toHaveBeenCalledWith({filter: fakeEventObj.target.dataset.id});
    });
});