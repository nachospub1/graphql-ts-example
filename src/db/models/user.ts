import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import Thread from './thread.js';
import Comment from './comment.js';

@Table({
  timestamps: false,
  modelName: 'User',
  tableName: 'users'
})

export default class User extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
    id!: number;

  @Column({
    type: DataType.STRING
  })
    userName!: string;

  @Column({
    type: DataType.STRING
  })
    firstName!: string;

  @Column({
    type: DataType.STRING
  })
    lastName!: string;

  @HasMany(() => Thread)
    threads: Thread[];

  @HasMany(() => Comment)
    comments: Comment[];
}

