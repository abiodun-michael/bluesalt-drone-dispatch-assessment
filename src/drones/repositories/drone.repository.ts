import { TypeOrmRepository } from 'src/config/repository/typeorm.repository';
import { Drone } from '../entities/drone.entity';
import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DroneRepository extends TypeOrmRepository<Drone> {
  constructor(private readonly dataSource: DataSource) {
    super(Drone, dataSource.createEntityManager());
  }
}
