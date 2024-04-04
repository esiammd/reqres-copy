import { IsObject, ValidateNested } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { Type } from 'class-transformer';

export class CreateUserControllerDto {
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  user: CreateUserDto;
}
