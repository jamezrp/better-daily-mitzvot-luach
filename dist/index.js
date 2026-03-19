"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notableEventsMap = exports.mitzvotMap = void 0;
exports.getMitzvotForDate = getMitzvotForDate;
exports.getNotableEventsForDate = getNotableEventsForDate;
const core_1 = require("@hebcal/core");
const mitzvot_map_1 = require("./mitzvot-map");
Object.defineProperty(exports, "mitzvotMap", { enumerable: true, get: function () { return mitzvot_map_1.mitzvotMap; } });
Object.defineProperty(exports, "notableEventsMap", { enumerable: true, get: function () { return mitzvot_map_1.notableEventsMap; } });
function getMitzvotForDate(gregorianDate, il = false) {
    const events = core_1.HebrewCalendar.getHolidaysOnDate(gregorianDate, il);
    const result = [];
    for (const ev of events) {
        const key = ev.getDesc();
        if (mitzvot_map_1.mitzvotMap[key])
            result.push(mitzvot_map_1.mitzvotMap[key]);
    }
    return result;
}
function getNotableEventsForDate(hdate) {
    const key = `${hdate.getDate()} ${hdate.getMonthName()}`;
    return mitzvot_map_1.notableEventsMap[key] || [];
}
