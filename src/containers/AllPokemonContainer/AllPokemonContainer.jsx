import React from "react";
import { useQuery } from "@apollo/react-hooks";

import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GET_ALL_POKEMON } from "../../graphql/pokemon-queries";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { AllContainer } from "./styles/styles";

const AllPokemonContainer = ({ numToShow }) => {
  const { data: { pokemons = [] } = {}, loading, error } = useQuery(
    GET_ALL_POKEMON,
    {
      variables: { first: `${numToShow}` },
    },
  );

  if (loading) return <LoadingSpinner />;

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
