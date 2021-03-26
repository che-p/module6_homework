// ** function
const degree = (x, y) => {
  if (
    !isFinite(x) ||
    isNaN(x) ||
    x % 1 !== 0 ||
    !isFinite(y) ||
    isNaN(y) ||
    y % 1 !== 0 ||
    x <= 0 ||
    y <= 0
  ) {
    console.log("Не натуральные числа");
  } else {
    let result = x;
    for (let i = 1; i < y; i++) {
      result *= x;
    }
    console.log(`${x} в степени ${y} равно ${result}`);
  }
};

degree(2, 3);
