import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { UserModel } from '../models/user';
import { UserResponse } from '../resources/response';
import { CreateUserDto, UpdateUserDto } from '../resources/request';

@Injectable()
export class UserService {
  constructor() {}

  users: UserModel[] = [
    {
      id: '47e659cf-37e6-43dd-805c-eea5c6a5972a',
      password: uuidv4(),
      username: 'alexclv',
      name: 'Alex',
      phoneNumber: '0745523662',
      birthday: 1017907802,
    },
    {
      id: '47e659cf-37e6-43dd-805c-eea5c6a5972a',
      password: uuidv4(),
      username: 'johnclv',
      name: 'Jonh',
      phoneNumber: '090524322',
      birthday: 1017907802,
    },
  ];

  createUser(createUserDto: CreateUserDto): UserResponse {
    const newUser: UserModel = {
      id: uuidv4(),
      ...createUserDto,
    };
    this.users.push(newUser);

    const { username, password, ...userRes } = newUser;

    return userRes;
  }

  getUsers(): UserResponse[] {
    const usersRes: UserResponse[] = this.users.map((u) => {
      const { username, password, ...userRes } = u;
      return userRes;
    });

    return usersRes;
  }

  getUserById(id: string): UserResponse {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1)
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const { username, password, ...userRes } = this.users[index];

    return userRes;
  }

  updateUserById(id: string, updateUserDto: UpdateUserDto): UserResponse {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1)
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    this.users[index] = {
      ...this.users[index],
      ...updateUserDto,
    };
    const { username, password, ...userRes } = this.users[index];

    return userRes;
  }

  deleteUserById(id: string): UserResponse {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1)
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const deletedUser = this.users[index];
    const { username, password, ...userRes } = deletedUser;

    delete this.users[index];

    return userRes;
  }
}
