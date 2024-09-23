"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  dateAsString: () => asString_default,
  dateFromString: () => fromString_default
});
module.exports = __toCommonJS(src_exports);

// src/format/fromString.ts
var fromString = (str, mask) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  const formattedMask = Object.entries(regex).map(([k, v]) => [k, v.exec(mask)]).reduce((arr, [key, value]) => {
    const k = key;
    const v = value;
    if (v) {
      switch (k) {
        case "year":
          return arr.replace(regex.year, "(?<year>\\d{2,4})");
        case "month":
          return arr.replace(regex.month, "(?<month>\\d{1,2})");
        case "shortMonth":
          return arr.replace(regex.shortMonth, "(?<shortMonth>[A-Za-z]{3})");
        case "longMonth":
          return arr.replace(regex.longMonth, "(?<longMonth>[A-Za-z]+)");
        case "date":
          return arr.replace(regex.date, "(?<date>\\d{1,2})");
        case "shortDay":
          return arr.replace(regex.shortDay, "(?<shortDay>[A-Za-z]{3})");
        case "longDay":
          return arr.replace(regex.shortDay, "(?<longDay>[A-Za-z]+)");
        case "hour":
          return arr.replace(regex.hour, "(?<hour>\\d{2})");
        case "minute":
          return arr.replace(regex.minute, "(?<minute>\\d{2})");
        case "second":
          return arr.replace(regex.second, "(?<second>\\d{2})");
        case "millisecond":
          return arr.replace(regex.millisecond, "(?<millisecond>\\d{3})");
      }
    } else
      return arr;
  }, mask);
  const matches = str.match(new RegExp(formattedMask));
  if (matches) {
    return new Date(
      Number((_b = (_a = matches.groups) == null ? void 0 : _a.year) != null ? _b : 0),
      ((_c = matches == null ? void 0 : matches.groups) == null ? void 0 : _c.month) ? Number(matches.groups.month) - 1 : ((_d = matches == null ? void 0 : matches.groups) == null ? void 0 : _d.shortMonth) ? monthsOfTheYear.findIndex((e) => {
        var _a2;
        return e.substring(0, 3) === ((_a2 = matches.groups) == null ? void 0 : _a2.shortMonth);
      }) : ((_e = matches == null ? void 0 : matches.groups) == null ? void 0 : _e.longMonth) ? monthsOfTheYear.findIndex((e) => {
        var _a2;
        return e === ((_a2 = matches.groups) == null ? void 0 : _a2.longMonth);
      }) : 0,
      Number((_g = (_f = matches.groups) == null ? void 0 : _f.date) != null ? _g : 0),
      Number((_i = (_h = matches.groups) == null ? void 0 : _h.hour) != null ? _i : 0),
      Number((_k = (_j = matches.groups) == null ? void 0 : _j.minute) != null ? _k : 0),
      Number((_m = (_l = matches.groups) == null ? void 0 : _l.second) != null ? _m : 0),
      Number((_o = (_n = matches.groups) == null ? void 0 : _n.millisecond) != null ? _o : 0)
    );
  } else {
    return null;
  }
};
var fromString_default = fromString;

// src/format/asString.ts
var asString = (date, mask) => {
  return Object.entries(regex).map(([k, v]) => [k, v.exec(mask)]).reduce((arr, [key, val]) => {
    const k = key;
    const v = val;
    if (v) {
      const s = v.index;
      const e = v.index + v[0].length;
      switch (k) {
        case "year":
          return arr.replace(regex.year, date.getFullYear().toString().slice((v[0] == "%y" ? 2 : 4) * -1));
        case "month":
          return arr.replace(regex.month, (date.getMonth() + 1).toString().padStart(v[0].length, "0"));
        case "shortMonth":
          return arr.replace(regex.shortMonth, monthsOfTheYear[date.getMonth()].substring(0, 3));
        case "longMonth":
          return arr.replace(regex.longMonth, monthsOfTheYear[date.getMonth()]);
        case "date":
          return arr.replace(regex.date, date.getDate().toString().padStart(v[0].length, "0"));
        case "shortDay":
          return arr.replace(regex.shortDay, daysOfTheWeek2[date.getDay()].substring(0, 3));
        case "longDay":
          return arr.replace(regex.longDay, daysOfTheWeek2[date.getDay()]);
        case "hour":
          return arr.replace(regex.hour, date.getHours().toString().padStart(v[0].length, "0"));
        case "minute":
          return arr.replace(regex.minute, date.getMinutes().toString().padStart(v[0].length, "0"));
        case "second":
          return arr.replace(regex.second, date.getSeconds().toString().padStart(v[0].length, "0"));
        case "millisecond":
          return arr.replace(regex.millisecond, date.getMilliseconds().toString().padStart(v[0].length, "0"));
      }
    } else {
      return arr;
    }
  }, mask);
};
var asString_default = asString;

// src/format/index.ts
var regex = {
  year: /%(Y|y)/,
  month: /%m/,
  shortMonth: /%(b|h)/,
  longMonth: /%B/,
  date: /%d/,
  shortDay: /%a/,
  longDay: /%A/,
  hour: /%H/,
  minute: /%M/,
  second: /%S/,
  millisecond: /%f/
};
var daysOfTheWeek2 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var monthsOfTheYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

// src/index.ts
Date.fromString = fromString_default;
Date.prototype.asString = function(mask) {
  return asString_default(this, mask);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dateAsString,
  dateFromString
});
//# sourceMappingURL=index.js.map