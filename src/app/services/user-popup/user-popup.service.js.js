define(function () {
    'use strict';

    angular
        .module('todoListApp')
        .factory('UserPopupService', UserPopupService);

    function UserPopupService() {
        return {
            showAlertPopup: showAlertPopup
        };

        function showAlertPopup(message) {
            alert(message);
        }
    }
});