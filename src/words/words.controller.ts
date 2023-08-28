import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { WordsService } from "./words.service";
import { Words } from "./words.model";
import { CreateWordDto } from "./dto/create-word.dto";

@ApiTags("Words")
@Controller("words")
export class WordsController {

  constructor(private wordsService: WordsService) {
  }

  @ApiOperation({ summary: "Создание слова" })
  @ApiResponse({ status: 200, type: Words })
  @Post()
  create(@Body() dto: CreateWordDto) {
    return this.wordsService.createWord(dto);
  }

  @ApiOperation({ summary: "получение всех слов по id категории" })
  @ApiResponse({ status: 200, type: Words })
  @Get("/:value")
  getAll(@Param("value") categoryId: number) {
    return this.wordsService.getWords(categoryId);
  }

  @ApiOperation({ summary: "удаление слова" })
  @ApiResponse({ status: 200, type: Words })
  @Delete("/:value")
  delete(@Param("value") wordId: number) {
    return this.wordsService.deleteWord(wordId);
  }

  @ApiOperation({ summary: "обновление слова" })
  @ApiResponse({ status: 200, type: Words })
  @Put("/:value")
  async update(@Param("value") id: number, @Body() data: Words) {
    return this.wordsService.updateWord(id, data);
  }
}
