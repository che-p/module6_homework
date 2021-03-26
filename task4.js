const intFunc = function (aMin, bMax) {
  let numOut = aMin;
  let countInt = setInterval(calc, 1000);
  function calc() {
    console.log(numOut);
    numOut++;
    if (numOut > bMax) clearInterval(countInt);
  }
};

intFunc(10, 20);
