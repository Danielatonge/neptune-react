/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResult = /* GraphQL */ `
  query GetResult($id: ID!) {
    getResult(id: $id) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const listResults = /* GraphQL */ `
  query ListResults(
    $filter: ModelResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRegister = /* GraphQL */ `
  query GetRegister($id: ID!) {
    getRegister(id: $id) {
      result
      id
      createdAt
      updatedAt
    }
  }
`;
export const listRegisters = /* GraphQL */ `
  query ListRegisters(
    $filter: ModelRegisterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegisters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        result
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGraphInfo = /* GraphQL */ `
  query GetGraphInfo($id: ID!) {
    getGraphInfo(id: $id) {
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
export const listGraphInfos = /* GraphQL */ `
  query ListGraphInfos(
    $filter: ModelGraphInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGraphInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getNodes = /* GraphQL */ `
  query GetNodes($id: ID!) {
    getNodes(id: $id) {
      id
      label
      createdAt
      updatedAt
    }
  }
`;
export const listNodes = /* GraphQL */ `
  query ListNodes(
    $filter: ModelNodesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLinks = /* GraphQL */ `
  query GetLinks($id: ID!) {
    getLinks(id: $id) {
      source
      target
      value
      id
      createdAt
      updatedAt
    }
  }
`;
export const listLinks = /* GraphQL */ `
  query ListLinks(
    $filter: ModelLinksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        source
        target
        value
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
