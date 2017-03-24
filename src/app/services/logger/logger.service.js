define(function () {
    'use strict';

    angular
        .module('todoListApp')
        .factory('Logger', LoggerService);

    function LoggerService() {
        return {
            logError: logError
        };

        function logError(err) {
            console.err(err);
        }
    }
});