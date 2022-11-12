import { capitalize, reverseString, stringLength } from './functions.js';

describe('stringLength function', () => {
  test('return the actual length', () => {
    expect(stringLength('hello')).toBe(5);
  });

  test('throw error for empty string', () => {
    expect(() => stringLength('')).toThrow('Too short string');
  });

  test('throw error for too long string', () => {
    expect(() => stringLength('Abracadabra')).toThrow('Too long string');
  });
});

test('reverseString function', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('test capitalize funtion', () => {
  expect(capitalize('hello')).toBe('Hello');
});
