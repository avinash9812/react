import { useState, useEffect } from "react";

export default function Facts() {
  let [getFacts, setGetFacts] = useState({});

  const URL = "https://catfact.ninja/fact?max_length=140";

  const handleFacts = async () => {
    const response = await fetch(URL);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setGetFacts({ fact: jsonResponse.fact });
  };

  useEffect(() => {
    const fetchFirstFact = async () => {
      const response = await fetch(URL);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setGetFacts({ fact: jsonResponse.fact });
    };

    fetchFirstFact();
  }, []);

  return (
    <div>
      <h1 style={{color:"cyan"}}>Get Facts of Cats</h1>
      <br />
      <h2>{getFacts.fact}</h2>
      <button onClick={handleFacts}>Generate Facts</button>
    </div>
  );
}
