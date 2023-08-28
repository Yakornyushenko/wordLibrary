import { ApiProperty } from "@nestjs/swagger";

export class CreateLanguageDto {
  @ApiProperty({ example: "English", description: "почтовый адрес пользователя" })
  readonly name: string;

  @ApiProperty({ example: "B1", description: "назначение " })
  readonly description: string;

  @ApiProperty({ example: "2", description: "id пользователя создашего языковой раздел" })
  readonly userId: number;
}