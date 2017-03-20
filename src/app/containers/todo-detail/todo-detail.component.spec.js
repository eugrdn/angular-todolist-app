describe('Todo detail component tests', function () {
    'use strict';

    var todo = {title: 'title'};
    var fakeResponse;

    var controller;
    var service;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_$componentController_, _TodosService_) {
        controller = _$componentController_('todoDetail');
        service = _TodosService_;
        fakeResponse = Promise.resolve({data: todo});
    }));

    it('should call service`s #update, when #submit calling and save responsed value to `todo` prop', function () {
        spyOn(service, 'update').and.returnValue(fakeResponse);

        controller.submit()
            .then(function () {
                expect(controller.todo).toEqual(todo);
            });

        expect(service.update).toHaveBeenCalled();
    });

    it('should call service`s #get, when #$onInit calling and save responsed value to `todo` prop', function () {
        spyOn(service, 'get').and.returnValue(fakeResponse);

        controller.$onInit()
            .then(function () {
                expect(controller.todo).toEqual(todo);
            });

        expect(service.get).toHaveBeenCalled();
    });
});