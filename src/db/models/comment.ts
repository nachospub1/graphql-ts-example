import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Thread from './thread.js';
import User from './user.js';

@Table({
  timestamps: false,
  modelName: 'Comment',
  tableName: 'comments'
})

export default class Comment extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
    id!: number;

  @Column({
    type: DataType.STRING
  })
    description!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
    userId!: number;

  @BelongsTo(() => User)
    user: User;

  @ForeignKey(() => Thread)
  @Column({
    type: DataType.INTEGER,
  })
    threadId!: number;

  @BelongsTo(() => Thread)
    thread: Thread;
}
