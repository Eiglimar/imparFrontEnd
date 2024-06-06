// src/graphql/queries.ts
import { gql } from "@apollo/client";

export const SEARCH_CARS = gql`
  query PegaCarrosPorNome($nome: String!) {
    pegaCarrosPorNome(nome: $nome) {
      id
      name
      status
      photoId
      photo {
        id
        base64
      }
    }
  }
`;
