import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/user.model";

interface IRoleModel {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, IRoleModel> {

  @ApiProperty({example:'1', description: 'уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example:'user', description: 'значение роли пользователя'})
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  value: string;

  @ApiProperty({example:'Пользователь', description: 'описание роли пользователя'})
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @HasMany(() => User)
  users: User[];
}