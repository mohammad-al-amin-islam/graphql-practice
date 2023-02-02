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

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }
  input CreateUpdate {
    id: ID!
    newUserName: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: CreateUpdate!): User
    deleteUser(id: ID!): User
  }
`;

module.exports = { typeDefs };
