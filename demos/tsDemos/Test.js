"use strict";
exports.__esModule = true;
var zip = require("./ZipCodeValidator");
var strings = ['hello', '98052', '101'];
var validator = new zip();
strings.forEach(function (s) {
    console.log("\"" + s + "\" - " + (validator.isAcceptable(s) ? 'matches' : 'does not match'));
});
