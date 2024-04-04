import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { UserService } from '../services';
import { UserResponse } from '../resources/response';
import { CreateUserDto, UpdateUserDto } from '../resources/request';

@ApiTags('USER API')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiResponse({
    type: [UserResponse],
  })
  @Get('all')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Patch(':id')
  updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
    return this.userService.updateUserById(id, updateUserDto);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
