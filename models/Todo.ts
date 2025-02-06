import {
  Table,
  Model,
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Index,
} from "sequelize-typescript";
import { Note } from "../config/interfaces/interfaces";

@Table({
  timestamps: false,
  tableName: "todo",
  modelName: "Todo",
})
class Todo extends Model<Note> implements Note {
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  declare id: number;

  @Index({
    name: 'name-index',
    type:"FULLTEXT",
  })
  @Column({
    type: DataType.STRING,
  })
  declare title: string;

  @Column({
    type: DataType.TEXT,
  })
  declare content: string;


}

export default Todo;
