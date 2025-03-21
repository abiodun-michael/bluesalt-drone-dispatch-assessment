import { Module } from '@nestjs/common';
import { MedicationService } from './medication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medication } from './entities/medication.entity';
import { MedicationRepository } from './repositories/medication.repository';
import { DroneModule } from 'src/drones/drone.module';
import { MedicationController } from './medication.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Medication]), DroneModule],
  providers: [MedicationService, MedicationRepository],
  controllers: [MedicationController],
  exports: [MedicationService],
})
export class MedicationModule {}
