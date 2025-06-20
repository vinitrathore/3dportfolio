import React, { useEffect, useState } from 'react';

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const url =`https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLg2kDkD3b3-ch0bzPtHoE4b30PLUH3fy__TUjNh1LPFrF9PMclrDdf8g4Swg1JqI6Qnj9jQNx0B-ZgwrQtwRSCWK6-W6yp-GfqdQCwLXIQepJAz39v1J9ZtQKrVfQUU9_6u2GAeEjx8zqh9QjNnyVSIRLj-vsqaEV7s-fX6Mdf3KdhVzg93JvzPfUzFdsozAgMoJg4kdSeLnaRpCNijcgmovQ71fZOsLG2X6XvOtbusHkBMaWHf8cDcd3ExATaTRHAtEIzcDaAsRhSxfN0YLBdA3djcIw&lib=MH46NatNxNwTQpBIwepAmnOdzRm4IKlxF`;
          try {
        const response = await fetch(url);
        const formattedData = await response.json();
        setData(formattedData);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData(); // ✅ Call the fetch function
  }, []);

  return (
    <div>
      <h2>Test API</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Test;
