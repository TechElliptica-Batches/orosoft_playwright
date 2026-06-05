let tup;
tup = [10, "Vaibhav"];
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTH"] = 401] = "UNAUTH";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
})(HttpStatus || (HttpStatus = {}));
let status = HttpStatus.BAD_REQUEST;
console.log(status);
export {};
//# sourceMappingURL=enum-demo.js.map