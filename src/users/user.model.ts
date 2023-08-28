import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";

interface IUserModel {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserModel> {

  @ApiProperty({example:'1', description: 'уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example:'blablabla@gmail.com', description: 'почтовый адрес пользователя'})
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  email: string;

  @ApiProperty({example:'12345678', description: 'пароль пользователя'})
  @Column({ type: DataType.STRING, allowNull: true })
  password: string;

  @ApiProperty({example:'false', description: 'забанен ли пользователь'})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({example:'спам', description: 'причина бана пользователя'})
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @ApiProperty({example:'1', description: 'id роли пользователя'})
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER})
  roleId: number;

  @BelongsTo(() => Role)
  role: Role;
}

