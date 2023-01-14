import { findAllThreads, findOneThread, createThread, updateThread, deleteThread } from './thread.js';
import { findAllUsers, findOneUser, createUser, updateUser, deleteUser } from './user.js';
import { createComment } from './comment.js';


const Query = {
  threads: findAllThreads,
  thread: findOneThread,
  users: findAllUsers,
  user: findOneUser
};
const Mutation = {
  createThread,
  createComment,
  updateThread,
  deleteThread,
  createUser,
  updateUser,
  deleteUser
};

export default { Query, Mutation };