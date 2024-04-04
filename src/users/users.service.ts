import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { type CreateUserDto } from './dto/create-user.dto';
import { type UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

import { type CreateUserResponseDto } from './dto/create-user-response.dto';
import { type FindAllUserResponseDto } from './dto/find-all-user-response.dto';
import { type FindOneUserResponseDto } from './dto/find-one-user-response.dto';
import { type UpdateUserResponseDto } from './dto/update-user-response.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserResponseDto> {
    const user = this.userRepository.create(createUserDto);
    const newUser = await this.userRepository.save(user);

    const { id, ...rest } = newUser;

    return {
      id: newUser.id,
      user: rest,
    };
  }

  async findAll({
    page,
    limit,
    offset,
  }: {
    page: number;
    limit: number;
    offset: number;
  }): Promise<FindAllUserResponseDto> {
    const users = await this.userRepository.find({
      skip: offset,
      take: limit,
      order: { id: 'ASC' },
    });

    const qtdUsers = await this.userRepository.count();

    return {
      page,
      per_page: limit,
      total: qtdUsers,
      total_pages: Math.ceil(qtdUsers / limit),
      data: users,
    };
  }

  async findOne(id: number): Promise<FindOneUserResponseDto> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return { data: user };
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserResponseDto> {
    await this.userRepository.update(id, updateUserDto);
    const response = await this.findOne(id);

    return { user: response.data };
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.userRepository.delete(id);
  }
}
