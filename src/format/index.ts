export interface IDateTime<T> {
  year: T,
  month: T,
  date: T,
  hour: T,
  minute: T,
  second: T,
  millisecond: T
}

export const regex = {
  year: /y{2,4}/,
  month: /M{1,2}/,
  date: /d{1,2}/,
  hour: /H{1,2}/,
  minute: /m{1,2}/,
  second: /s{1,2}/,
  millisecond: /S{1,3}/
} as IDateTime<RegExp>