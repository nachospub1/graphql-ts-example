import User from '../db/models/user.js';
import Thread from '../db/models/thread.js';
import Comment from '../db/models/comment.js';

export async function findAllUsers() {
  try {
    const users = await User.findAll({
      include: [{ model: Thread, as: 'threads' }, { model: Comment, as: 'comments' }],

    });
    return users;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function findOneUser(parent, args) {
  try {
    const user = await User.findOne({
      where: { id: args.id },
      include: [{ model: Thread, as: 'threads' }, { model: Comment, as: 'comments' }],
    });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function createUser(parent, args) {
  try {
    const { userName, firstName, lastName } = args.input;
    const user = await User.create({ userName, firstName, lastName });
    user.threads = [];
    user.comments = [];
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function updateUser(parent, args) {
  try {
    const { id, input } = args;
    const { userName, firstName, lastName } = input;
    await User.update({ userName, firstName, lastName }, { where: { id } });
    const user = await findOneUser(null, { id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function deleteUser(parent, args) {
  try {
    const { id } = args;
    const deleted = await User.destroy({ where: { id } });
    return { success: deleted > 0 ? true : false, id };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}