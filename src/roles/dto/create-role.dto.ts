import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({example:'Administrator', description: 'роль пользователя'})
  readonly value: string;
  @ApiProperty({example:'пользователь с расширенным доступом', description: 'описание роли пользователя'})
  readonly description: string;
}