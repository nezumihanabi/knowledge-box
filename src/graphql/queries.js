/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      password
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKnow = /* GraphQL */ `
  query GetKnow($id: ID!) {
    getKnow(id: $id) {
      id
      memo
      file
      filename
      createdAt
      updatedAt
    }
  }
`;
export const listKnows = /* GraphQL */ `
  query ListKnows(
    $filter: ModelKnowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKnows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        memo
        file
        filename
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
