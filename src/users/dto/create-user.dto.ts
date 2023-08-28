import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example:'blablabla@gmail.com', description: 'почтовый адрес пользователя'})
  readonly email: string;
  @ApiProperty({example:'12345678', description: 'пароль пользователя'})
  readonly password: string;
}