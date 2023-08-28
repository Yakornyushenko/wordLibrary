import { Module } from "@nestjs/common";
import { WordsController } from "./words.controller";
import { WordsService } from "./words.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Words } from "./words.model";

@Module({
  controllers: [WordsController],
  providers: [WordsService],
  imports: [SequelizeModule.forFeature([Words])]
})
export class WordsModule {
}
