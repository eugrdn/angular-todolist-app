export default class TitleValidate {
    constructor() {
        this.restrict = 'A';
    }

    link($scope, $element) {
        $element[0].value()
    }

};