import { Drone } from 'src/drones/entities/drone.entity';
import { config } from '.';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Medication } from 'src/medication/entities/medication.entity';
import { User } from 'src/user/entities/user.entity';

require('dotenv').config();

export const typeOrmConfig: DataSourceOptions = {
  type: 'mysql',
  url: config.db.url,
  migrations: ['dist/db/migrations/*.js'],
  entities: [Drone, Medication, User],
  subscribers: [],
  logging: false,
  synchronize: true,
};

export const dataSource = new DataSource(typeOrmConfig);
