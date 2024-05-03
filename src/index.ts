import { fromString, asString } from "./format"

declare global {
  interface DateConstructor {
    fromString: (str: string, mask: string) => Date | null
  }

  interface Date {
    asString: (mask: string) => String
  }
}

Date.fromString = fromString
Date.prototype.asString = function(mask) { return asString(this, mask)}

export { fromString as dateFromString, asString as dateAsString }