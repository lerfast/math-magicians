import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  console.log('operate:', numberOne, numberTwo, operation);
  const one = Big(numberOne || '0');
  const two = Big(numberTwo || '0');

  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === '*') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    if (two.eq('0')) {
      return 'NaN';
    }
    return one.div(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}

export default operate;
