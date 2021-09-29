"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lokijs_1 = __importDefault(require("lokijs"));
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.db = new lokijs_1.default('data.db');
        this.db.removeCollection('calendar');
        this.calendar = this.db.addCollection('calendar', {});
    }
    DataStore.prototype.addAppointment = function (appointment) {
        return this.calendar.insert(appointment);
    };
    return DataStore;
}());
exports.default = DataStore;
//# sourceMappingURL=DataStore.js.map