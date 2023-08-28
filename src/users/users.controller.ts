import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./user.model";
@ApiTags('Users')
@Controller("users")
export class UsersController {

  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: "Создание пользователя"})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: "Получение всех пользователей"})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: "Получение пользователя"})
  @ApiResponse({status: 200, type: User})
  @Get('/:value')
  getOne(@Param('value') email: string) {
    return this.userService.getUserByEmail(email);
  }
}
