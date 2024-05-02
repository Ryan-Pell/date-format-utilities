import { regex, IDateTime } from "."

const fromString = (str: string, mask: string) => {  
  console.log(str, mask)

  const v = Object.entries(regex)
    .map(([k, v]) => [k, v.exec(mask)]) //get values from mask and regex
    .reduce((arr, [key, value]) => {
      const k = key as keyof IDateTime<any>
      const v = value as RegExpExecArray | null

      if(v){
        switch (k){
          case "year": return arr.replace(regex.year, v[0] === '%Y' ? 'YYYY' : 'yy');
          case "month": return arr.replace(regex.month, 'mm');
          case "shortMonth": return arr.replace(regex.shortMonth, 'bbb');
          case "longMonth": return arr;
          case "date": return arr.replace(regex.date, 'dd');
          case "shortDay": return arr.replace(regex.shortDay, 'aaa');
          case "longDay": return arr;
          case "hour": return arr.replace(regex.hour, 'HH');
          case "minute": return arr.replace(regex.minute, 'MM');
          case "second": return arr.replace(regex.second, 'SS');
          case "millisecond": return arr.replace(regex.millisecond, 'fff');
        }        
      } else return arr
    }, mask)

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


  console.log("Aft", v)

  return new Date()
  // return new Date(v.year, v.month - 1, v.date, v.hour, v.minute, v.second, v.millisecond)
}

export default fromString