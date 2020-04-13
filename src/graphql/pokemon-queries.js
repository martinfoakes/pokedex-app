import gql from "graphql-tag";

export const GET_ALL_POKEMON = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          type
          damage
        }
      }
    }
  }
`;
