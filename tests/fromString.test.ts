import fromString from '../src/format/fromString'

test('date from string', () => {
  const date1 = fromString('2024-05-01 12:11.11.555', 'yyyy-MM-dd HH:mm:ss.SSS')
  expect(date1).toStrictEqual(new Date(2024, 4, 1, 12, 11, 11, 555))
})