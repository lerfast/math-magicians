import React from 'react';
import { render, waitFor } from '@testing-library/react';
import QuoteDisplay from '../Components/QuoteDisplay';

describe('QuoteDisplay Component', () => {
  it('displays a loading message while fetching data', () => {
    const { getByText } = render(<QuoteDisplay />);
    const loadingMessage = getByText('Loading....');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('displays an error message if fetching data fails', async () => {
    // Mock the fetch function to simulate an error
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network Error'));

    const { getByText } = render(<QuoteDisplay />);
    await waitFor(() => {
      const errorMessage = getByText('Error Obtaining Quote');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('displays the fetched quote', async () => {
    // Mock the fetch function to return a specific quote
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([{ quote: 'This is a test quote' }]),
    });

    const { getByText } = render(<QuoteDisplay />);
    await waitFor(() => {
      const quoteText = getByText('“This is a test quote”');
      expect(quoteText).toBeInTheDocument();
    });
  });

  it('displays an error message if no quotes are found', async () => {
    // Mock the fetch function to return an empty array
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([]),
    });

    const { getByText } = render(<QuoteDisplay />);
    await waitFor(() => {
      const errorMessage = getByText('No Qoutes Found');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
