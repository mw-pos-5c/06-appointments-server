"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Appointment = /** @class */ (function () {
    function Appointment(start, end, loc, desc) {
        this.start = start;
        this.end = end;
        this.loc = loc;
        this.desc = desc;
    }
    Appointment.parse = function (data) {
        return new Appointment();
    };
    return Appointment;
}());
exports.default = Appointment;
//# sourceMappingURL=Appointment.js.map