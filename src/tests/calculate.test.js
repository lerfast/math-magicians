import calculate from '../logic/calculate';

describe('calculate function', () => {
  it('should clear all values for AC', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };
    expect(calculate(initialState, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
