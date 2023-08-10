import React, { useState, useEffect } from 'react';

function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=funny', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'Ui3trniAc4k4tdHdL897Hw==OsAtQ7WSbVuFiKqj',
          },
        });
        const data = await response.json();
        if (data.length > 0) {
          setQuote(data[0].quote);
        } else {
          setError('No Qoutes Found');
        }
        setLoading(false);
      } catch (err) {
        setError('Error Obtaining Quote');
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="quote">
      <p>
        &ldquo;
        {quote}
        &rdquo;
      </p>
    </div>
  );
}

export default QuoteDisplay;
