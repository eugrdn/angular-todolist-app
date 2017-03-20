describe('Todo detail component tests', function () {
    'use strict';

    var controller;
    var service;

    beforeEach(angular.mock.module('todoListApp'));

    beforeEach(inject(function (_$componentController_, _TodosService_) {
        controller = _$componentController_('todoDetail');
        service = _TodosService_;
    }));

    it('should call service`s #update, when #submit calling', function () {
        spyOn(service, 'update');

        try {
            controller.submit();
        } catch (e) {
            //catch #then call
        }

        expect(service.update).toHaveBeenCalled();
    });

    it('should call service`s #get, when #$onInit calling', function () {
        spyOn(service, 'get');

        try {
            controller.$onInit();
        } catch (e) {
            //catch #then call
        }

        expect(service.get).toHaveBeenCalled();
    });
});