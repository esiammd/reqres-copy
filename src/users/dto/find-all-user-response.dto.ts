import { type User } from '../entities/user.entity';

export class FindAllUserResponseDto {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}
