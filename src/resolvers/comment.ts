import Comment from '../db/models/comment.js';

export async function createComment(parent, args) {
    try {
        const { userId, threadId, description } = args.input;
        const comment = await Comment.create({ userId, threadId, description });
        return comment;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function updateComment(parent, args) {
    try {
        const { userId, threadId, description } = args.input;
        const comment = await Comment.create({ userId, threadId, description });
        return comment;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}