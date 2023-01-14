import User from '../db/models/user.js';
import Thread from '../db/models/thread.js';
import Comment from '../db/models/comment.js';

export async function findAllThreads() {
  try {
    const threads = await Thread.findAll({
      include: [
        { model: User },
        { model: Comment, include: [{ model: User }] }
      ]
    });
    return threads;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function findOneThread(parent, args) {
  try {
    const thread = await Thread.findOne({
      where: { id: args.id }, include: [
        { model: User },
        { model: Comment, include: [{ model: User }] }
      ]
    });
    return thread;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function createThread(parent, args) {
  try {
    const { userId, name, description } = args.input;
    const thread = await Thread.create({ userId, name, description });
    thread.comments = [];
    return thread;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function updateThread(parent, args) {
  try {
    const { id, input } = args;
    const { name, description } = input;
    await Thread.update({ name, description }, { where: { id } });
    const thread = await findOneThread(null, { id });
    return thread;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function deleteThread(parent, args) {
  try {
    const { id } = args;
    const deleted = await Thread.destroy({ where: { id } });
    return { success: deleted > 0 ? true : false, id };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}