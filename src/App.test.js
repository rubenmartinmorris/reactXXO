//import { render, screen } from '@testing-library/react';
//import App from './App';

import isValid from './App';

describe('Is valid MatrixisValid should return true if the supplied matrix is 3X3 and contains nulls xes or oes', () => {
  test('is 3 X 3', () => {
    const matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(isValid(matrix).toBe(true));
  });
});
