import { regex, IDateTime, daysOfTheWeek, monthsOfTheYear } from "."

const asString = (date: Date, mask: string) => {
  return Object.entries(regex)
    .map(([k, v]) => [k, v.exec(mask)]) //get values from mask and regex
    .reduce((arr, [key, val]) => {
      const k = key as keyof IDateTime<any>
      const v = val as RegExpExecArray | null

      if(v){
        const s = v.index
        const e = v.index + v[0].length

        switch(k){
          case "year":
            return arr.replace(regex.year, date.getFullYear().toString().slice((v[0] == '%y' ? 2 : 4)*-1));
          case "month":
            return arr.replace(regex.month, (date.getMonth() + 1).toString().padStart(v[0].length, '0'));
          case "shortMonth":
            return arr.replace(regex.shortMonth, monthsOfTheYear[date.getMonth()].substring(0, 3));
          case "longMonth":
            return arr.replace(regex.longMonth, monthsOfTheYear[date.getMonth()]);
          case "date":
            return arr.replace(regex.date, date.getDate().toString().padStart(v[0].length, '0'));
          case "shortDay":
            return arr.replace(regex.shortDay, daysOfTheWeek[date.getDay()].substring(0, 3));
          case "longDay":
            return arr.replace(regex.longDay, daysOfTheWeek[date.getDay()]);
          case "hour":
            return arr.replace(regex.hour, date.getHours().toString().padStart(v[0].length, '0'));
          case "minute":
            return arr.replace(regex.minute, date.getMinutes().toString().padStart(v[0].length, '0'));
          case "second":
            return arr.replace(regex.second, date.getSeconds().toString().padStart(v[0].length, '0'));
          case "millisecond":
            return arr.replace(regex.millisecond, date.getMilliseconds().toString().padStart(v[0].length, '0'));
        }

      } else {
        return arr        
      }
    }, mask)
}

export default asString