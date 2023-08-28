import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User,
              private roleService: RolesService) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRole("USER");
    await user.$set("role", [role.id]);
    user.role = role
    return user;
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }
  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({where: {email}});
  }
}
