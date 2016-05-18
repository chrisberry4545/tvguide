"use strict";
var Programme = (function () {
    function Programme() {
    }
    Programme.prototype.getLength = function () {
        return this.endTime - this.startTime;
    };
    ;
    return Programme;
}());
exports.Programme = Programme;
//# sourceMappingURL=programme.js.map