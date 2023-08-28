import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Languages } from "./languages.model";
import { CreateLanguageDto } from "./dto/create-language.dto";

@Injectable()
export class LanguagesService {

  constructor(@InjectModel(Languages) private languageRepository: typeof Languages) {
  }

  async createLanguage(dto: CreateLanguageDto) {
    return await this.languageRepository.create(dto);
  }

  async getLanguagesByUser(userId: number) {
    return await this.languageRepository.findAll({ where: { userId }, include: { all: true } });
  }

  async deleteLanguage(id: number) {
    return await this.languageRepository.destroy({ where: { id } });
  }
}
