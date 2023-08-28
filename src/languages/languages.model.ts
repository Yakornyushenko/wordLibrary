import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Categories } from "../categories/category.model";

interface ILanguageModel {
  name: string;
  description: string;
}

@Table({ tableName: "language" })
export class Languages extends Model<Languages, ILanguageModel> {

  @ApiProperty({ example: "1", description: "уникальный идентификатор языка" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "English", description: "наименование секции языка" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: "переход с А2 на B1", description: "назначение секции языка" })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({ example: "21", description: "id пользователя создашего языковой раздел" })
  @Column({ type: DataType.STRING, allowNull: false })
  userId: number;

  @HasMany(() => Categories)
  categories: Categories[];
}