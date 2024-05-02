//https://docs.rs/chrono/latest/chrono/format/strftime/index.html

export interface IDateTime<T> {
  year: T,
  month: T,
  shortMonth: T,
  longMonth: T
  date: T,
  shortDay: T,
  longDay: T
  hour: T,
  minute: T,
  second: T,
  millisecond: T
}

export const regex = {
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
} as IDateTime<RegExp>

export const maskHelper = {
  HourMinute: "%H:%M",
  HourMinuteSecond: "%H:%M%S",
  DayMonthYear: "%d/%m/%y",
  YearMonthDay: "%Y-%m-%d"
}

export const daysOfTheWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

export const monthsOfTheYear = [
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
]

export { default as fromString } from './fromString'
export { default as asString } from './asString'