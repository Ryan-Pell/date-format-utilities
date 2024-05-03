import '../src/index'

test('date from string', () => {
  const date1 = Date.fromString('2024-05-01 12:11.11.555', '%Y-%m-%d %H:%M.%S.%f')
  expect(date1).toEqual(new Date(2024, 4, 1, 12, 11, 11, 555))
})

test('date with longs', () => {
  const date1 = Date.fromString('8-August-2024', '%d-%B-%Y')
  expect(date1).toEqual(new Date(2024, 7, 8))
})

test('date with shorts', () => {
  const date1 = Date.fromString('8-Sep-2024', '%d-%b-%Y')
  expect(date1).toEqual(new Date(2024, 8, 8))
})