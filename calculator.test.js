import Calculator from './calculator.js';

describe('test Calculator class methods', () => {
  describe('test add method', () => {
    test('0 + 0 = 0', () => {
      const calculator = new Calculator();
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('-5 + 5 = 0', () => {
      const calculator = new Calculator();
      expect(calculator.add(-5, 5)).toBe(0);
    });

    test('3 + 4 = 7', () => {
      const calculator = new Calculator();
      expect(calculator.add(3, 4)).toBe(7);
    });
  });

  describe('test substract method', () => {
    test('0 - 0 = 0', () => {
      const calculator = new Calculator();
      expect(calculator.substract(0, 0)).toBe(0);
    });

    test('5 - 3 = 2', () => {
      const calculator = new Calculator();
      expect(calculator.substract(5, 3)).toBe(2);
    });

    test('3 - 4 = -1', () => {
      const calculator = new Calculator();
      expect(calculator.substract(3, 4)).toBe(-1);
    });
  });

  describe('test divide method', () => {
    test('0 / 1 = 0', () => {
      const calculator = new Calculator();
      expect(calculator.divide(0, 1)).toBe(0);
    });

    test('3 / 3 = 1', () => {
      const calculator = new Calculator();
      expect(calculator.divide(3, 3)).toBe(1);
    });

    test('4 / 2 = 2', () => {
      const calculator = new Calculator();
      expect(calculator.divide(4, 2)).toBe(2);
    });
  });

  describe('test multiply method', () => {
    test('0 * 0 = 0', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(0, 0)).toBe(0);
    });

    test('-1 * 1 = -1', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(-1, 1)).toBe(-1);
    });

    test('2 * 3 = 6', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(2, 3)).toBe(6);
    });
  });
});
