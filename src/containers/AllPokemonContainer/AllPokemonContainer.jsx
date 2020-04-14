import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_ALL_POKEMON } from "../../graphql/pokemon-queries";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import {
  AllContainer,
  FilterFormLabel,
  FilterFormInput,
  FilterFormButton,
} from "./styles/styles";

const AllPokemonContainer = ({ numToShow, submitFunc, resetFunc }) => {
  const { data: { pokemons = [] } = {}, loading, error } = useQuery(
    GET_ALL_POKEMON,
    {
      variables: { first: `${numToShow}` },
    },
  );

  if (loading) return <LoadingSpinner />;

  if (error) return "Oopsie woopsie";

  return (
    <>
      <h2>{"View all Generation I Pokémon"}</h2>
      <form onSubmit={submitFunc} className="number-input" id="number-filter">
        <FilterFormLabel for="input-num">
          {"Number of Pokémon to show: "}
        </FilterFormLabel>
        <FilterFormInput
          type="number"
          name="input-number"
          id="input-num"
          min="1"
          max="151"
        />
        <FilterFormButton form="number-filter" type="submit" value="Submit">
          {"Submit"}
        </FilterFormButton>
        <FilterFormButton type="reset" onClick={resetFunc}>
          {"Reset"}
        </FilterFormButton>
      </form>
      <AllContainer>
        {pokemons &&
          pokemons.map((pokemonObj) => (
            <PokemonCard key={pokemonObj.id} pokemon={pokemonObj} />
          ))}
      </AllContainer>
    </>
  );
};

export default AllPokemonContainer;
