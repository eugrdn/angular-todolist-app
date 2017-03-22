define(function () {
    'use strict';

    angular
        .module('todoListApp')
        .directive('ccpStop', ccpStop);

    function ccpStop() {
        return {
            restrict: 'A',
            link: function ($scope, $element) {
                $element.on('cut copy paste', function (e) {
                    e.preventDefault();
                });
            }
        };
    }
});