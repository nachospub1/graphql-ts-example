import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import User from './user.js';
import Comment from './comment.js';

@Table({
  timestamps: false,
  modelName: 'Thread',
  tableName: 'threads'
})

export default class Thread extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
    id!: number;

  @Column({
    type: DataType.STRING
  })
    name!: string;

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

  @HasMany(() => Comment)
    comments: Comment[];
}

