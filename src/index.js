// const celcius = [23, 140, 212, 41];
// // -34 * 1.8
// function getCelcius(far) {
//   const cel = far.map((f) => (f - 32) / 1.8);
//   console.log(cel);
// }

// getCelcius(celcius);

// const testList = [11, NaN, [], "Angels"];

// function checkFalsey(arr) {
//   return arr.some((element) => !element);  // NaN is falsey
// }

// console.log(checkFalsey(testList));

const testList = ["Rabbit", "Football", "Cracking"];
function getTotal() {
  return testList.reduce((acc, current) => acc + current).length;
}

console.log(getTotal(testList));
