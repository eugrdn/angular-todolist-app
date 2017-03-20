define(function () {
    'use strict';

    return function ccpStop() {
        return {
            restrict: 'A',
            link: function ($scope, $element) {
                $element.on('cut copy paste', function (e) {
                    e.preventDefault();
                });
            }
        };
    };
});