import asString from "../src/format/asString";

test('date as string', () => {
  const date1 = asString(new Date(2024, 4, 1, 12, 11, 11, 555), 'yy-MM-dd HH:mm')
  expect(date1).toStrictEqual('24-05-01 12:11')

  const date2 = asString(new Date(2024, 4, 1, 12, 11, 11, 555), 'yyyy-MM-ddTHH:mm.ss.SSS')
  expect(date2).toStrictEqual('2024-05-01T12:11.11.555')
})