import 'dotenv/config';

import { DataSource, type DataSourceOptions } from 'typeorm';
import { type SeederOptions } from 'typeorm-extension';

import { MainSeeder } from './seeds/main.seeder';

export const databaseConfig: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  synchronize: true,

  entities: ['src/**/entities/*.ts'],
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(databaseConfig);
