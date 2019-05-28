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
