import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Languages } from "../languages/languages.model";
import { Words } from "../words/words.model";

interface ICategoryModel {
  name: string;
  description: string;
}

@Table({ tableName: "category" })
export class Categories extends Model<Categories, ICategoryModel> {

  @ApiProperty({ example: "1", description: "уникальный идентификатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "ships", description: "название категории" })
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  name: string;

  @ApiProperty({ example: "all about ships", description: "описание категории" })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({ example: "1", description: "id языка в котором создается категория" })
  @ForeignKey(() => Languages)
  @Column({ type: DataType.INTEGER })
  languageId: number;

  @BelongsTo(() => Languages)
  language: Languages;

  @HasMany(() => Words)
  words: Words[];
}

