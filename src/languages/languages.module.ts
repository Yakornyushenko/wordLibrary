import { Module } from "@nestjs/common";
import { LanguagesService } from "./languages.service";
import { LanguagesController } from "./languages.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Languages } from "./languages.model";
import { CategoriesModule } from "../categories/categories.module";
import { Categories } from "../categories/category.model";

@Module({
  providers: [LanguagesService],
  controllers: [LanguagesController],
  imports: [
    SequelizeModule.forFeature([Languages, Categories]),
    CategoriesModule
  ],
  exports: [LanguagesService]
})
export class LanguagesModule {}
