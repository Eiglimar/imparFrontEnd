// src/graphql/mutations.ts
import { gql } from "@apollo/client";

export const ADD_CAR = gql`
  mutation CreateCar($name: String!, $photoId: Int!, $status: Boolean!) {
    createCar(name: $name, photoId: $photoId, status: $status) {
      id
      name
      photoId
    }
  }
`;

export const CAD_PHOTO = gql`
  mutation CreatePhoto($base64string: String!) {
    createPhoto(base64string: $base64string) {
      id
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation AtualizarCar($id: Int!, $name: String, $status: Boolean, $photoId: Int) {
    atualizarCar(id: $id, name: $name, status: $status, photoId: $photoId) {
      id
    }
  }
`;
