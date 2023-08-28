import { ApiProperty } from "@nestjs/swagger";

export class CreateWordDto {
  @ApiProperty({ example: "apple", description: "слово сохраняемое в категории" })
  readonly word: string;

  @ApiProperty({ example: "яблоко", description: "перевод слова" })
  readonly translation: string;

  @ApiProperty({ example: 1, description: "id категории" })
  readonly categoryId: number;
}