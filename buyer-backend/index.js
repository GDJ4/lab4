const express = require('express');
const path = require('path');
const { ApolloServer, gql } = require('apollo-server-express');

const products = require(path.join(__dirname, 'data', 'products.json'));

const typeDefs = gql`
  type Product {
    id: Int
    name: String
    price: Float
    description: String
    categories: [String]
  }

  type Query {
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    products: () => products
  }
};

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 3001 }, () => {
    console.log(`GraphQL API Server ready at http://localhost:3001${server.graphqlPath}`);
  });
}

startServer();
