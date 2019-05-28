import * as Calculator from '../Calculator';

it('adds some numbers', () => {
  expect(Calculator.add(1, 2)).toEqual(3);
});

it('multiplies some numbers', () => {
  expect(Calculator.multiply(5,5)).toEqual(25);
});

it('subtracts some numbers', () => {
  expect(Calculator.subtract(7,4)).toEqual(3);
});

it('divides some numbers', () => {
  expect(Calculator.divide(10,2)).toEqual(5);
});

describe('given and array of numbers and operators', () => {

  it('returns a value based on the given operator', () => {
    const arr = ['3','+','1'];
    expect(Calculator.doCalculation(arr)).toEqual(4);
  });

  it('returns a value based on multiple calculations', () => {
    const arr = ['3','+','1','×','5'];
    expect(Calculator.doCalculation(arr)).toEqual(20);
  });

})
