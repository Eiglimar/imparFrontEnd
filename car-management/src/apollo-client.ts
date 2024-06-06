// src/apollo-client.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://app-eiglimarsilvacostajunior-api.azurewebsites.net/graphql/", // Substitua <your-api-url> pela URL da sua API
  cache: new InMemoryCache()
});

export default client;
