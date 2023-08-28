import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({ example: "ships", description: "название категории" })
  readonly name: string;

  @ApiProperty({ example: "all about ships", description: "описание категории" })
  readonly description: string;

  @ApiProperty({ example: 1, description: "id языка в который добавляется категория" })
  readonly languageId: number;
}