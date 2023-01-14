export default `#graphql
type User {
  id: Int!
  userName: String!
  firstName: String
  lastName: String
  threads: [Thread]
  comments: [Comment]
}

type Thread {
  id: Int!
  name: String!
  description: String!
  user: User!
  comments: [Comment]
}

type Comment {
  id: Int!
  description: String!
  user: User!
}

input ThreadInput {
  name: String
  description: String
  userId: Int
}

input CommentInput {
  threadId: Int!
  description: String
  userId: Int!
}

input UserInput {
  userName: String!
  firstName: String!
  lastName: String!
}

type Query {
  thread(id: Int!): Thread
  threads: [Thread]
  user(id: Int!): User
  users: [User]
}

type DeleteOutput {
  success: Boolean!
  id: Int!
}

type Mutation {
  createThread(input: ThreadInput): Thread
  createComment(input: CommentInput): Comment
  updateThread(id: Int!, input: ThreadInput): Thread
  deleteThread(id: Int!): DeleteOutput
  createUser(input: UserInput): User
  updateUser(id: Int!, input: UserInput): User
  deleteUser(id: Int!): DeleteOutput
}
`;
