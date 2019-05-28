import * as math from 'mathjs';

export const add = (...numbers) => {
  return math.add(...numbers);
}

export const multiply = (...numbers) => {
  return math.multiply(...numbers);
}

export const subtract = (...numbers) => {
  return math.subtract(...numbers);
}

export const divide = (...numbers) => {
  return math.divide(...numbers);
}

export const calcNumbers = ['0','1','2','3','4','5','6','7','8','9','.'];
export const calcOperators = ['÷','×','−','+','=','C'];

export const doSum = (key, num1, num2) => {
  switch (key) {
    case '+':
      return add(num1,num2);
    case '−':
      return subtract(num1,num2);

    case '×':
      return multiply(num1,num2);

    case '÷':
      return divide(num1,num2);
    default:
      return 0;
    }
}

export const doCalculation = (calcArr) => {
  let sum = 0;
  let acc = 0;
  let num1 = 0
  calcArr.forEach((key,i) => {

    if(isNaN(key)){
      if(acc <= 0){
        num1 = calcArr[i-1];
      }
      const num2 = calcArr[i+1];
      sum = doSum(key, num1, num2);
      num1 = sum;
      acc ++;
    }

  });
  return sum;
}
