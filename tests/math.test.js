const { add, subtract, multiply, divide, square, cube } = require('../src/math');

describe('Math utilities', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
      expect(add(-1, -1)).toBe(-2);
    });

    test('adds zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts resulting in negative', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide', () => {
    test('divides evenly', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('divides with precision', () => {
      expect(divide(10, 3, 2)).toBe(3.33);
    });

    test('divides with different precision', () => {
      expect(divide(10, 3, 4)).toBe(3.3333);
    });

    test('throws on divide by zero', () => {
      expect(() => divide(10, 0)).toThrow();
    });
  });

  describe('square', () => {
    test('squares a positive number', () => {
      expect(square(4)).toBe(16);
    });

    test('squares a negative number', () => {
      expect(square(-3)).toBe(9);
    });

    test('squares zero', () => {
      expect(square(0)).toBe(0);
    });
  });

  describe('cube', () => {
    test('cubes a positive number', () => {
      expect(cube(3)).toBe(27);
    });

    test('cubes a negative number', () => {
      expect(cube(-2)).toBe(-8);
    });

    test('cubes zero', () => {
      expect(cube(0)).toBe(0);
    });
  });
});
