import { useEffect, useState } from 'react'

function useRandomQuote() {
    const [quote, setQuote] = useState([]);

    useEffect(() => {
      const fetchQuote = async () => await fetch(`https://type.fit/api/quotes`)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.value.quote);
      })
      fetchQuote();
    }, []);
return quote;  
}

export default useRandomQuote
