/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResult = /* GraphQL */ `
  mutation CreateResult(
    $input: CreateResultInput!
    $condition: ModelResultConditionInput
  ) {
    createResult(input: $input, condition: $condition) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateResult = /* GraphQL */ `
  mutation UpdateResult(
    $input: UpdateResultInput!
    $condition: ModelResultConditionInput
  ) {
    updateResult(input: $input, condition: $condition) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteResult = /* GraphQL */ `
  mutation DeleteResult(
    $input: DeleteResultInput!
    $condition: ModelResultConditionInput
  ) {
    deleteResult(input: $input, condition: $condition) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      search_name
      usage
      belong_to
      authored_by
      affiliated_with
      people
      made_by
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      search_name
      usage
      belong_to
      authored_by
      affiliated_with
      people
      made_by
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      search_name
      usage
      belong_to
      authored_by
      affiliated_with
      people
      made_by
      id
      createdAt
      updatedAt
    }
  }
`;
export const createRegister = /* GraphQL */ `
  mutation CreateRegister(
    $input: CreateRegisterInput!
    $condition: ModelRegisterConditionInput
  ) {
    createRegister(input: $input, condition: $condition) {
      result
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateRegister = /* GraphQL */ `
  mutation UpdateRegister(
    $input: UpdateRegisterInput!
    $condition: ModelRegisterConditionInput
  ) {
    updateRegister(input: $input, condition: $condition) {
      result
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteRegister = /* GraphQL */ `
  mutation DeleteRegister(
    $input: DeleteRegisterInput!
    $condition: ModelRegisterConditionInput
  ) {
    deleteRegister(input: $input, condition: $condition) {
      result
      id
      createdAt
      updatedAt
    }
  }
`;
export const createGraphInfo = /* GraphQL */ `
  mutation CreateGraphInfo(
    $input: CreateGraphInfoInput!
    $condition: ModelGraphInfoConditionInput
  ) {
    createGraphInfo(input: $input, condition: $condition) {
      nodes {
        id
        label
        createdAt
        updatedAt
      }
      links {
        source
        target
        value
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateGraphInfo = /* GraphQL */ `
  mutation UpdateGraphInfo(
    $input: UpdateGraphInfoInput!
    $condition: ModelGraphInfoConditionInput
  ) {
    updateGraphInfo(input: $input, condition: $condition) {
      nodes {
        id
        label
        createdAt
        updatedAt
      }
      links {
        source
        target
        value
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteGraphInfo = /* GraphQL */ `
  mutation DeleteGraphInfo(
    $input: DeleteGraphInfoInput!
    $condition: ModelGraphInfoConditionInput
  ) {
    deleteGraphInfo(input: $input, condition: $condition) {
      nodes {
        id
        label
        createdAt
        updatedAt
      }
      links {
        source
        target
        value
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const createNodes = /* GraphQL */ `
  mutation CreateNodes(
    $input: CreateNodesInput!
    $condition: ModelNodesConditionInput
  ) {
    createNodes(input: $input, condition: $condition) {
      id
      label
      createdAt
      updatedAt
    }
  }
`;
export const updateNodes = /* GraphQL */ `
  mutation UpdateNodes(
    $input: UpdateNodesInput!
    $condition: ModelNodesConditionInput
  ) {
    updateNodes(input: $input, condition: $condition) {
      id
      label
      createdAt
      updatedAt
    }
  }
`;
export const deleteNodes = /* GraphQL */ `
  mutation DeleteNodes(
    $input: DeleteNodesInput!
    $condition: ModelNodesConditionInput
  ) {
    deleteNodes(input: $input, condition: $condition) {
      id
      label
      createdAt
      updatedAt
    }
  }
`;
export const createLinks = /* GraphQL */ `
  mutation CreateLinks(
    $input: CreateLinksInput!
    $condition: ModelLinksConditionInput
  ) {
    createLinks(input: $input, condition: $condition) {
      source
      target
      value
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateLinks = /* GraphQL */ `
  mutation UpdateLinks(
    $input: UpdateLinksInput!
    $condition: ModelLinksConditionInput
  ) {
    updateLinks(input: $input, condition: $condition) {
      source
      target
      value
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteLinks = /* GraphQL */ `
  mutation DeleteLinks(
    $input: DeleteLinksInput!
    $condition: ModelLinksConditionInput
  ) {
    deleteLinks(input: $input, condition: $condition) {
      source
      target
      value
      id
      createdAt
      updatedAt
    }
  }
`;
