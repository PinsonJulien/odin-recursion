import {describe, expect, test} from '@jest/globals';
import { fibonacci } from './fibonacci';

describe('Fibonacci', () => {

  test('Should return an array containing the asked number of the Fibonacci sequence', () => {
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    expect(fibonacci(expected.length)).toEqual(expected);
  });

  test('Returns an empty array when asked to return 0 numbers', () => {
    expect(fibonacci(0)).toEqual([]);
  });
});