import { Module } from '@nestjs/common';
import { DroneService } from './drone.service';
import { DroneController } from './drone.controller';
import { DroneRepository } from './repositories/drone.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drone } from './entities/drone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Drone])],
  providers: [DroneService, DroneRepository],
  controllers: [DroneController],
  exports: [DroneService],
})
export class DroneModule {}
