import { type User } from '../entities/user.entity';

export class CreateUserResponseDto {
  id: number;
  user: Omit<User, 'id'>;
}
