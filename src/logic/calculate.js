import operate from './operate';

function calculate(obj, buttonName) {
  // console.log('calculate:', obj, buttonName); // Add this line
  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }

  if (/[0-9]/.test(buttonName)) {
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    if (obj.next) {
      return {
        next: obj.next + buttonName,
      };
    }
    return {
      next: buttonName,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return obj;
      }
      return { next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return obj;
      }
      return { next: '0.' };
    }
    return { next: '0.' };
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (buttonName === '%') {
    if (obj.next) {
      return { next: (parseFloat(obj.next) / 100).toString() };
    }
    if (obj.total) {
      return { total: (parseFloat(obj.total) / 100).toString() };
    }
    return {};
  }

  if (buttonName === '+' || buttonName === '-' || buttonName === '*' || buttonName === '÷') {
    return { total: obj.next, next: null, operation: buttonName };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
  }

  return {};
}

export default calculate;
