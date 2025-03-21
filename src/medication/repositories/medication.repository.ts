import { TypeOrmRepository } from 'src/config/repository/typeorm.repository';
import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Medication } from '../entities/medication.entity';

@Injectable()
export class MedicationRepository extends TypeOrmRepository<Medication> {
  constructor(private readonly dataSource: DataSource) {
    super(Medication, dataSource.createEntityManager());
  }
}
