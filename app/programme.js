"use strict";
var Programme = (function () {
    function Programme(name, startTime, endTime) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    Programme.prototype.getLength = function () {
        return this.endTime - this.startTime;
    };
    ;
    return Programme;
}());
exports.Programme = Programme;
//# sourceMappingURL=programme.js.map