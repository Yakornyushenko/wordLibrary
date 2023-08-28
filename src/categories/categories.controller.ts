import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Categories } from "./category.model";

@ApiTags("Categories")
@Controller("categories")
export class CategoriesController {

  constructor(private readonly categoriesService: CategoriesService) {
  }

  @ApiOperation({ summary: "Создание языковой категории" })
  @ApiResponse({ status: 200, type: Categories })
  @Post()
  create(@Body() categoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(categoryDto);
  }

  @ApiOperation({ summary: "Получение языковых разделов" })
  @ApiResponse({ status: 200, type: Categories })
  @Get("/:value")
  getAll(@Param("value") languageId: number) {
    return this.categoriesService.getCategories(languageId);
  }

  @ApiOperation({ summary: "удаление категории" })
  @ApiResponse({ status: 200, type: Categories })
  @Delete("/:value")
  delete(@Param("value") categoryId: number) {
    return this.categoriesService.deleteCategory(categoryId);
  }

  @ApiOperation({ summary: "обновление категории" })
  @ApiResponse({ status: 200, type: Categories })
  @Put("/:value")
  async update(@Param("value") id: number, @Body() data: Categories) {
    return this.categoriesService.updateCategory(id, data);
  }
}
