define("ZipCodeValidator", ["require", "exports"], function (require, exports) {
    "use strict";
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    return ZipCodeValidator;
});
define("Test", ["require", "exports", "ZipCodeValidator"], function (require, exports, zip) {
    "use strict";
    exports.__esModule = true;
    var strings = ['hello', '98052', '101'];
    var validator = new zip();
    strings.forEach(function (s) {
        console.log("\"" + s + "\" - " + (validator.isAcceptable(s) ? 'matches' : 'does not match'));
    });
});
