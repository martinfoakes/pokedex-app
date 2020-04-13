import React from "react";

import {
  CardContainer,
  PokemonName,
  PokemonMeta,
  CardImage,
  AttacksList,
} from "./styles/styles";

const PokemonCard = ({ pokemon }) => {
  return (
    <CardContainer>
      <PokemonName>
        <p>{`#${pokemon.number}: ${pokemon.name}`}</p>
      </PokemonName>
      <PokemonMeta>
        <span>{`Max HP: ${pokemon.maxHP}`}</span>
        <span>{`Max CP: ${pokemon.maxCP}`}</span>
      </PokemonMeta>
      <CardImage>
        <img src={pokemon.image} alt={pokemon.name} />
      </CardImage>
      <AttacksList>
        {pokemon?.attacks?.special.slice(0, 3).map((attack) => (
          <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
        ))}
      </AttacksList>
    </CardContainer>
  );
};

export default PokemonCard;
