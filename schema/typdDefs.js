const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type TimeList {
    id: ID!
    yearOfPublication: Int!
    name: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!

    allTime: [TimeList!]!
    singleTime(name: String!): TimeList!
  }
`;

module.exports = { typeDefs };
