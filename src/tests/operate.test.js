import operate from '../logic/operate';

describe('operate function', () => {
  it('should perform addition correctly', () => {
    expect(operate('5', '3', '+')).toBe('8');
  });

  it('should perform subtraction correctly', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  it('should perform multiplication correctly', () => {
    expect(operate('5', '3', 'x')).toBe('15');
  });

  it('should perform division correctly', () => {
    expect(operate('6', '3', '÷')).toBe('2');
  });

  it('should perform modulo correctly', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });

  it('should throw an error for division by zero', () => {
    expect(() => operate('5', '0', '÷')).toThrow("Can't divide by 0.");
  });

  it('should throw an error for modulo by zero', () => {
    expect(() => operate('5', '0', '%')).toThrow("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('5', '3', '$')).toThrow("Unknown operation '$'");
  });
});
