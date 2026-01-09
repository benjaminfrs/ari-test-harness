const { concat, reverse, capitalize, isPalindrome } = require('../src/strings');

describe('String utilities', () => {
  describe('concat', () => {
    test('concatenates two strings', () => {
      expect(concat('hello', 'world')).toBe('helloworld');
    });

    test('concatenates with empty string', () => {
      expect(concat('hello', '')).toBe('hello');
    });

    test('concatenates empty strings', () => {
      expect(concat('', '')).toBe('');
    });
  });

  describe('reverse', () => {
    test('reverses a simple string', () => {
      expect(reverse('hello')).toBe('olleh');
    });

    test('reverses a palindrome', () => {
      expect(reverse('racecar')).toBe('racecar');
    });

    test('reverses an empty string', () => {
      expect(reverse('')).toBe('');
    });

    test('reverses a single character', () => {
      expect(reverse('a')).toBe('a');
    });
  });

  describe('capitalize', () => {
    test('capitalizes first letter of each word', () => {
      expect(capitalize('hello world')).toBe('Hello World');
    });

    test('handles already capitalized', () => {
      expect(capitalize('Hello World')).toBe('Hello World');
    });

    test('handles single word', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('handles empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('handles multiple spaces', () => {
      expect(capitalize('hello  world')).toBe('Hello  World');
    });
  });

  describe('isPalindrome', () => {
    test('detects a palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    test('detects non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    test('handles empty string', () => {
      expect(isPalindrome('')).toBe(true);
    });

    test('handles single character', () => {
      expect(isPalindrome('a')).toBe(true);
    });

    test('is case insensitive', () => {
      expect(isPalindrome('RaceCar')).toBe(true);
    });
  });
});
