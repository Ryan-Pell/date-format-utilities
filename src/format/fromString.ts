import { regex, IDateTime, daysOfTheWeek, monthsOfTheYear } from "."

const fromString = (str: string, mask: string) => {  
  const formattedMask = Object.entries(regex)
    .map(([k, v]) => [k, v.exec(mask)]) //get values from mask and regex
    .reduce((arr, [key, value]) => {
      const k = key as keyof IDateTime<any>
      const v = value as RegExpExecArray | null

      if(v){
        switch (k){
          case "year": return arr.replace(regex.year, '(?<year>\\d{2,4})');
          case "month": return arr.replace(regex.month, '(?<month>\\d{1,2})');
          case "shortMonth": return arr.replace(regex.shortMonth, '(?<shortMonth>[A-Za-z]{3})');
          case "longMonth": return arr.replace(regex.longMonth, '(?<longMonth>[A-Za-z]+)');
          case "date": return arr.replace(regex.date, '(?<date>\\d{1,2})');
          case "shortDay": return arr.replace(regex.shortDay, '(?<shortDay>[A-Za-z]{3})');
          case "longDay": return arr.replace(regex.shortDay, '(?<longDay>[A-Za-z]+)');
          case "hour": return arr.replace(regex.hour, '(?<hour>\\d{2})');
          case "minute": return arr.replace(regex.minute, '(?<minute>\\d{2})');
          case "second": return arr.replace(regex.second, '(?<second>\\d{2})');
          case "millisecond": return arr.replace(regex.millisecond, '(?<millisecond>\\d{3})');
        }        
      } else return arr
    }, mask)

  const matches = str.match(new RegExp(formattedMask))

  if(matches){
    return new Date(
      Number(matches.groups?.year ?? 0),
      matches?.groups?.month ? Number(matches.groups.month) - 1 :
        matches?.groups?.shortMonth ? monthsOfTheYear.findIndex((e) => e.substring(0, 3) === matches.groups?.shortMonth) :
          matches?.groups?.longMonth ? monthsOfTheYear.findIndex((e) => e === matches.groups?.longMonth) : 0,
      Number(matches.groups?.date ?? 0),
      Number(matches.groups?.hour ?? 0),
      Number(matches.groups?.minute ?? 0),
      Number(matches.groups?.second ?? 0),
      Number(matches.groups?.millisecond ?? 0)
    )
  } else {
    return null
  }
}

export default fromString