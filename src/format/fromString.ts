import { regex, IDateTime } from "."

const fromString = (str: string, mask: string) => {  
  const v = Object.entries(regex)
    .map(([k, v]) => [k, v.exec(mask)]) //get values from mask and regex
    .reduce((acc, [key, val]) => { //convert and read string
      const k = key as string
      const v = val as RegExpExecArray | null
      const num = v ? Number(str.substring(v.index, v.index + v[0].length)) : 0

      return acc = {...acc, [k]: num}
    }, {}) as IDateTime<number>

  return new Date(v.year, v.month - 1, v.date, v.hour, v.minute, v.second, v.millisecond)
}

export default fromString