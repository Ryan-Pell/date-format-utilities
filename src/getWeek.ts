
export default (date: Date, weekStartOnMonday: boolean = false) => {
  date.setHours(0, 0, 0, 0)
  date.setFullYear(2027)

  const firstDay = new Date(date.getFullYear(), 0, 1)
  const daysToFirstSunday = firstDay.getDay() === 1 ? 0 : (7 - firstDay.getDay()) % 7
  const firstSunday = new Date(date.getFullYear(), 0, firstDay.getDate() + daysToFirstSunday)

  if(weekStartOnMonday){
    firstSunday.setDate(firstSunday.getDate() + 1)
  }

  console.log(firstSunday)
}