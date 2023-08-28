import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Categories } from "./category.model";

@Injectable()
export class CategoriesService {

  constructor(@InjectModel(Categories) private categoriesRepository: typeof Categories) {
  }

  async createCategory(dto: CreateCategoryDto) {
    return await this.categoriesRepository.create(dto);
  }

  async getCategories(languageId: number) {
    return this.categoriesRepository.findAll({ where: { languageId } });
  }

  async deleteCategory(id: number) {
    return this.categoriesRepository.destroy({ where: { id } });
  }

  async updateCategory(id: number, data: Categories) {
    return this.categoriesRepository.update(data, { where: { id } });
  }
}
