let func1 = function (num) {
  return function (num2) {
    return num + num2;
  };
};

let numInput = 3434;
let numInput2 = 2;

const resultFunc = func1(numInput);

console.log(resultFunc(numInput2));
