import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Components/Calculator';

describe('Calculator Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Calculator />);
    const screen = getByTestId('screen');
    expect(screen).toHaveTextContent('0');
  });

  it('updates the display when buttons are clicked', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const button7 = getByText('7');
    const button8 = getByText('8');
    const screen = getByTestId('screen');

    fireEvent.click(button7);
    fireEvent.click(button8);

    expect(screen).toHaveTextContent('78');
  });

  it('performs calculations correctly', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const button3 = getByText('3');
    const buttonPlus = getByText('+');
    const button2 = getByText('2');
    const buttonEqual = getByText('=');
    const screen = getByTestId('screen');

    fireEvent.click(button3);
    fireEvent.click(buttonPlus);
    fireEvent.click(button2);
    fireEvent.click(buttonEqual);

    expect(screen).toHaveTextContent('5');
  });
});
