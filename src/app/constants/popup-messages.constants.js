define(function () {
    'use strict';

    angular
        .module('todoListApp')
        .constant('popupMessages', {
            SUCCESSFUL_SAVE: 'Todo has been saved successfully!',
            FAILED_SAVE: 'Oops! Todo hasn`t been saved!'
        });
});