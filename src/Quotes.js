import React, { useState, useEffect } from "react";
import { QUOTES_API } from "./apiList";

const getRandomQuote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch(QUOTES_API)
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  const getNewQuote = () => {
    setQuote(getRandomQuote(quotes));
  };

  return (
    <>
      <h1>Quote Generater</h1>
      <section>
        <button onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>“</span>
          {quote?.text}
        </h3>
        <i>- {quote?.author}</i>
      </section>
    </>
  );
};
export default Quotes;
