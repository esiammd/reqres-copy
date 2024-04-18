import { type DataSource } from 'typeorm';
import {
  runSeeder,
  type Seeder,
  type SeederFactoryManager,
} from 'typeorm-extension';
import UserSeeder from './user.seeder';

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await runSeeder(dataSource, UserSeeder);
  }
}
