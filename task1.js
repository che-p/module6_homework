function getOddEven0(arr) {
  let arrOdd = 0;
  let arrEven = 0;
  let arr0 = 0;
  arr.forEach(function (item, index, array) {
    if (typeof item == "number") {
      if (item == 0) {
        arr0++;
      } else {
        item % 2 == 0 ? arrEven++ : arrOdd++;
      }
    }
  });
  console.log(
    `В массиве ${arr0} нулей, ${arrEven} четных и ${arrOdd} нечетных элементов`
  );
}

let arr1 = [1, 4, 5, 5, true, "jjjj"];
getOddEven0(arr1);
