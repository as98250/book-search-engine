const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Books {
    bookId: ID!
    authors: String!
    descriptiom: String
    title: String
    image:
    link:

  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: 
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;