import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from "./users.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user.model";
import { RolesModule } from "../roles/roles.module";
import { Role } from "../roles/roles.model";
import { Languages } from "../languages/languages.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, Languages]),
    RolesModule
  ],
  exports: [UsersService]
})
export class UsersModule {}
