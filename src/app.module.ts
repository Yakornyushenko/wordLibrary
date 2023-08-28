import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/roles.model";
import { AuthController } from "./auth/auth.controller";
import { AuthModule } from "./auth/auth.module";
import { LanguagesModule } from "./languages/languages.module";
import { Languages } from "./languages/languages.model";
import { CategoriesModule } from "./categories/categories.module";
import { Categories } from "./categories/category.model";
import { WordsModule } from "./words/words.module";
import { Words } from "./words/words.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, Languages, Categories, Words],
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    LanguagesModule,
    CategoriesModule,
    WordsModule
  ],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}