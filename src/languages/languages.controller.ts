import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { LanguagesService } from "./languages.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { Languages } from "./languages.model";

@ApiTags("Languages")
@Controller("languages")
export class LanguagesController {

  constructor(private readonly languageService: LanguagesService) {
  }

  @ApiOperation({ summary: "Создание языкового раздела" })
  @ApiResponse({ status: 200, type: Languages })
  @Post()
  create(@Body() languageDto: CreateLanguageDto) {
    return this.languageService.createLanguage(languageDto);
  }

  @ApiOperation({ summary: "Получение языковых разделов" })
  @ApiResponse({ status: 200, type: Languages })
  @Get("/:value")
  getAll(@Param("value") userId: number) {
    return this.languageService.getLanguagesByUser(userId);
  }

  @ApiOperation({ summary: "удаление языка" })
  @ApiResponse({ status: 200, type: Languages })
  @Delete("/:value")
  delete(@Param("value") languageId: number) {
    return this.languageService.deleteLanguage(languageId);
  }
}
