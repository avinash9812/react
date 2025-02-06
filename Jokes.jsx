import { useEffect, useState } from "react";

export default function Jokes() {
  const [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const GetNewJoke = async () => {
    const response = await fetch(URL);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    const getFirstJoke = async () => {
      const response = await fetch(URL);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    };
    getFirstJoke();
  }, []);

  return (
    <div>
      <h1 style={{ color: "yellow" }}>Jokes</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={GetNewJoke}>Generate Joke</button>
    </div>
  );
}
