import '../src/index'

test('date as string', () => {
  const date1 = new Date(2024, 4, 1, 12, 11, 11, 555).asString('%y-%m-%d %H:%M')
  expect(date1).toStrictEqual('24-05-01 12:11')

  const date2 = new Date(2024, 4, 1, 12, 11, 11, 555).asString('%Y-%m-%dT%H:%M.%S.%f')
  expect(date2).toStrictEqual('2024-05-01T12:11.11.555')
})

test('day of the week', () => {
  const date1 = new Date(2024, 4, 1)
  expect(date1.asString('%a')).toStrictEqual('Wed')
  expect(date1.asString('%A')).toStrictEqual('Wednesday')
})

test('month', () => {
  const date1 = new Date(2024, 3, 1)
  expect(date1.asString('%b')).toStrictEqual('Apr')
  expect(date1.asString('%B')).toStrictEqual('April')
})