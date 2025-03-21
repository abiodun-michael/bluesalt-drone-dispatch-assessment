import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Drone, DroneModel, DroneState } from './entities/drone.entity';
import { CreateDroneDto } from './dto/create-drone.dto';
import { DroneRepository } from './repositories/drone.repository';

@Injectable()
export class DroneService {
  constructor(private readonly droneRepository: DroneRepository) {}

  async registerDrone(dto: CreateDroneDto): Promise<Drone> {
    try {
      if (!Object.values(DroneState).includes(dto.state)) {
        throw new BadRequestException(`Invalid state: ${dto.state}`);
      }

      if (!Object.values(DroneModel).includes(dto.model)) {
        throw new BadRequestException(`Invalid model: ${dto.model}`);
      }

      const drone = this.droneRepository.create(dto);
      return await this.droneRepository.save(drone);
    } catch (error) {
      throw error;
    }
  }

  async getAvailableDrones(): Promise<Drone[]> {
    try {
      return this.droneRepository.find({
        where: { state: DroneState.IDLE, batteryCapacity: 25 },
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllDrones(): Promise<Drone[]> {
    try {
      return this.droneRepository.find({});
    } catch (error) {
      throw error;
    }
  }

  async checkBatteryLevel(id: string): Promise<number> {
    try {
      const drone = await this.droneRepository.findOne({ where: { id } });
      if (!drone) throw new NotFoundException('Drone not found');
      return drone.batteryCapacity;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string) {
    try {
      return await this.droneRepository.findOne({
        where: { id },
        relations: ['medications'],
      });
    } catch (error) {
      throw error;
    }
  }

  async getMedications(id: string) {
    try {
      return await this.droneRepository.find({
        where: {
          medications: {
            drone: { id },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async updateState(state: DroneState, id: string) {
    try {
      return await this.droneRepository.update({ id }, { state });
    } catch (error) {
      throw error;
    }
  }
}
