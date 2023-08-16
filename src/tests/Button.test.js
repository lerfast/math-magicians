import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Components/Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button label="Click Me" />);
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button label="Click Me" onClick={onClickMock} />);
    const buttonElement = getByText('Click Me');

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('applies special class when special prop is true', () => {
    const { container } = render(<Button label="Special Button" special />);
    const buttonElement = container.querySelector('.button.special');
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies double-width class when doubleWidth prop is true', () => {
    const { container } = render(<Button label="Double Width" doubleWidth />);
    const buttonElement = container.querySelector('.button.double-width');
    expect(buttonElement).toBeInTheDocument();
  });
});
