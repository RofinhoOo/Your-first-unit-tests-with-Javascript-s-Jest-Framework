// app.js
function sum(a, b) {
    return a + b;
  }
  
  const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
  };
  
  const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
  };
  
  const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
  };
  
  module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
  