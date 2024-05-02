import '../src/index'

test('date from string', () => {
  const date1 = Date.fromString('2024-05-01 12:11.11.555', '%Y-%m-%d %H:%M:%S.%f')
  expect(date1).toStrictEqual(new Date(2024, 4, 1, 12, 11, 11, 555))
})