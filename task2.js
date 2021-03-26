const primeNumber = function (num) {
  let primeReturn = `${num} - простое число`;
  if (num > 1000) {
    primeReturn = "Данные неверны";
  } else if (num === 0 || num === 1) {
    primeReturn = `Число ${num} не считается`;
  } else {
    /*  вводим число
делим его по модулю на числа от 2-х до половины этого числа
если 0, то число составное
иначе простое
*/
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        primeReturn = `${num} - составное число`;
        break;
      }
    }
  }

  return primeReturn;
};

let numPrimeTest = 0;
console.log(primeNumber(numPrimeTest));
