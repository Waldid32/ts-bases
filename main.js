"use strict";
var Validantions;
(function (Validantions) {
    Validantions.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    const validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? false : true;
    };
})(Validantions || (Validantions = {}));
console.log(Validantions.validateText('Waldid'));
//# sourceMappingURL=main.js.map