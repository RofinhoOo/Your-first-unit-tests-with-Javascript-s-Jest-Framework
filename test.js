// app.test.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test('converts 10 euros to dollars', () => {
  let dollars = fromEuroToDollar(10);
  expect(dollars).toBe(12);
});

test('converts 20 dollars to yen', () => {
  let yen = fromDollarToYen(20);
  expect(yen).toBe(2558);
});

test('converts 50 yen to pounds', () => {
  let pounds = fromYenToPound(50);
  expect(pounds).toBe(40);
});
