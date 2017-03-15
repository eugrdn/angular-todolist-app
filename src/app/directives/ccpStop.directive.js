export default class ccpStop {
    constructor() {
        this.restrict = 'A';
    }

    link($scope, $element) {
        $element.on('cut copy paste', (e)=> {
            e.preventDefault();
        });
    }
};