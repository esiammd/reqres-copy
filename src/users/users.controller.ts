import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { UsersService } from './users.service';
import { type CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { CreateUserResponseDto } from './dto/create-user-response.dto';
import { FindAllUserResponseDto } from './dto/find-all-user-response.dto';
import { FindOneUserResponseDto } from './dto/find-one-user-response.dto';
import { UpdateUserResponseDto } from './dto/update-user-response.dto';
import { CreateUserControllerDto } from './dto/create-user-controller.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'User created successfully.',
    type: CreateUserResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Bad Request Response API.' })
  @ApiBody({ type: CreateUserControllerDto })
  async create(
    @Body() createUserControllerDto: CreateUserControllerDto,
  ): Promise<CreateUserResponseDto> {
    console.log(createUserControllerDto.user);
    const createUserDto: CreateUserDto = createUserControllerDto.user;
    return await this.usersService.create(createUserDto);
  }

  @Get()
  @ApiQuery({
    name: 'page',
    type: Number,
  })
  @ApiOkResponse({
    description: 'List all users.',
    type: FindAllUserResponseDto,
    isArray: true,
  })
  async findAll(
    @Query('page') page = 1,
    @Query('per_page') per_page = 5,
  ): Promise<FindAllUserResponseDto> {
    return await this.usersService.findAll({
      page: Number(page),
      limit: Number(per_page),
      offset: (page - 1) * per_page,
    });
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
  })
  @ApiOkResponse({
    description: 'Displays the requested user.',
    type: FindOneUserResponseDto,
  })
  @ApiNotFoundResponse({ description: 'User not found.' })
  async findOne(@Param('id') id: number): Promise<FindOneUserResponseDto> {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    required: true,
  })
  @ApiOkResponse({
    description: 'User updated successfully.',
    type: UpdateUserResponseDto,
  })
  @ApiNotFoundResponse({ description: 'User not found.' })
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserResponseDto> {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
  })
  @HttpCode(204)
  @ApiNoContentResponse({ description: 'User successfully removed.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  async remove(@Param('id') id: number): Promise<void> {
    await this.usersService.remove(id);
  }
}
