import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "./App.css";
import LandingPageContainer from "./containers/LandingPage/LandingPageContainer";
import AllPokemonContainer from "./containers/AllPokemonContainer/AllPokemonContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [pokeNum, setPokeNum] = useState(
    window.localStorage.getItem("numPokemon") || 151,
  );

  // ApolloClient is a state management library that takes GraphQL queries,
  // handles requesting and caching the data, and updating the UI
  const client = new ApolloClient({ uri: "https://graphql-pokemon.now.sh/" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeNum(e.target[0].value);
    window.localStorage.setItem("numPokemon", e.target[0].value);
  };

  const resetNum = () => {
    if (window.localStorage.getItem("numPokemon") !== null) {
      window.localStorage.removeItem("numPokemon");
      setPokeNum(151);
    }
  };

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <LandingPageContainer />
            </Route>
            <Route path="/all-pokemon">
              <AllPokemonContainer
                submitFunc={handleSubmit}
                resetFunc={resetNum}
                numToShow={pokeNum}
              />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
