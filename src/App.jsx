import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import AllPokemonContainer from "./containers/AllPokemonContainer/AllPokemonContainer";
import "./App.css";

function App() {
  // ApolloClient is a state management library that takes GraphQL queries,
  // handles requesting and caching the data, and updating the UI
  const client = new ApolloClient({ uri: "https://graphql-pokemon.now.sh/" });
  const [pokeNum, setPokeNum] = useState(9);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeNum(e.target[0].value);
  };

  return (
    <ApolloProvider client={client}>
      <main>
        <form onSubmit={handleSubmit} className="number-input">
          <label for="in-num">{"Number of Pokémon to show: "}</label>
          <input
            type="number"
            name="input-number"
            id="in-num"
            min="1"
            max="151"
          />
          <input id="num-select-button" type="submit" value="Submit" />
        </form>
        <AllPokemonContainer numToShow={pokeNum} />
      </main>
    </ApolloProvider>
  );
}

export default App;
