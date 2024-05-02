import { regex, IDateTime } from "."

const fromString = (str: string, mask: string) => {  
  console.log(str, mask)

  const formattedMask = Object.entries(regex)
    .map(([k, v]) => [k, v.exec(mask)]) //get values from mask and regex
    .reduce((arr, [key, value]) => {
      const k = key as keyof IDateTime<any>
      const v = value as RegExpExecArray | null

      if(v){
        switch (k){
          case "year": return arr.replace(regex.year, '(\\d{2,4})');
          case "month": return arr.replace(regex.month, '(\\d{2})');
          case "shortMonth": return arr.replace(regex.shortMonth, '(.{3})');
          case "longMonth": return arr;
          case "date": return arr.replace(regex.date, '(\\d{2})');
          case "shortDay": return arr.replace(regex.shortDay, '(.{3})');
          case "longDay": return arr;
          case "hour": return arr.replace(regex.hour, '(\\d{2})');
          case "minute": return arr.replace(regex.minute, '(\\d{2})');
          case "second": return arr.replace(regex.second, '(\\d{2})');
          case "millisecond": return arr.replace(regex.millisecond, '(\\d{3})');
        }        
      } else return arr
    }, mask)

  
  const reg = new RegExp(formattedMask.replace(/\s/g, "\\s"))
  console.log(reg)
  const matches = str.match(/(\d{2,4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2}).(\d{3})/)
  console.log(matches)

  // const v = Object.entries(regex)
  //   .map(([k, v]) => [k, v.exec(mask)]) //get values from mask and regex
  //   .reduce((acc, [key, val]) => { //convert and read string
  //     const k = key as string
  //     const v = val as RegExpExecArray | null
  //     const num = v ? Number(str.substring(v.index, v.index + v[0].length)) : 0

  //     console.log(k, str.substring(v?.index ?? 0).match(/^\d+/))
  //     // return acc = {...acc, [k]: num}

  //     return acc
  //   }, {}) as IDateTime<number>

  return new Date()
  // return new Date(v.year, v.month - 1, v.date, v.hour, v.minute, v.second, v.millisecond)
}

export default fromString