import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Categories } from "../categories/category.model";

interface IWordModel {
  word: string;
  translation: string;
}

@Table({ tableName: "words" })
export class Words extends Model<Words, IWordModel> {

  @ApiProperty({ example: "1", description: "уникальный идентификатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "apple", description: "слово добавляемое в языковую категорию" })
  @Column({ type: DataType.STRING, allowNull: false })
  word: string;

  @ApiProperty({ example: "яблоко", description: "перевод слова" })
  @Column({ type: DataType.STRING, allowNull: false })
  translation: string;

  @ApiProperty({ example: "1", description: "id языковой категории" })
  @ForeignKey(() => Categories)
  @Column({ type: DataType.INTEGER })
  categoryId: number;

  @BelongsTo(() => Categories)
  category: Categories;
}

