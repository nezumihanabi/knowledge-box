/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      password
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      password
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      password
      createdAt
      updatedAt
    }
  }
`;
export const createKnow = /* GraphQL */ `
  mutation CreateKnow(
    $input: CreateKnowInput!
    $condition: ModelKnowConditionInput
  ) {
    createKnow(input: $input, condition: $condition) {
      id
      memo
      file
      filename
      createdAt
      updatedAt
    }
  }
`;
export const updateKnow = /* GraphQL */ `
  mutation UpdateKnow(
    $input: UpdateKnowInput!
    $condition: ModelKnowConditionInput
  ) {
    updateKnow(input: $input, condition: $condition) {
      id
      memo
      file
      filename
      createdAt
      updatedAt
    }
  }
`;
export const deleteKnow = /* GraphQL */ `
  mutation DeleteKnow(
    $input: DeleteKnowInput!
    $condition: ModelKnowConditionInput
  ) {
    deleteKnow(input: $input, condition: $condition) {
      id
      memo
      file
      filename
      createdAt
      updatedAt
    }
  }
`;
