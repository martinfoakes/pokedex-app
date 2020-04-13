import React from "react";
import { useQuery } from "@apollo/react-hooks";

import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GET_ALL_POKEMON } from "../../graphql/pokemon-queries";
import { AllContainer } from "./styles/styles";

const AllPokemonContainer = ({ numToShow }) => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_ALL_POKEMON, {
    variables: { first: `${numToShow}` },
  });

  return (
    <AllContainer>
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </AllContainer>
  );
};

export default AllPokemonContainer;
