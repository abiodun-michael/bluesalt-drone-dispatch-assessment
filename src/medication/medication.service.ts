import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { LoadMedicationDto } from './dto/load-medication.dto';
import { MedicationRepository } from './repositories/medication.repository';
import { DroneService } from 'src/drones/drone.service';

@Injectable()
export class MedicationService {
  constructor(
    private readonly medicationRepo: MedicationRepository,
    private droneService: DroneService,
  ) {}

  async loadMedication({
    droneId,
    ...dto
  }: LoadMedicationDto): Promise<string> {
    try {
      const drone = await this.droneService.getById(droneId);

      if (!drone) throw new NotFoundException('Drone not found');

      if (drone.batteryCapacity < 25)
        throw new BadRequestException('Battery too low to load medication');

      const totalWeight =
        drone.medications.reduce((sum, med) => sum + med.weight, 0) +
        dto.weight;

      if (totalWeight > drone.weightLimit)
        throw new BadRequestException('Exceeds weight limit');

      await this.medicationRepo.insert({ ...dto, drone });

      return 'Medication loaded successfully';
    } catch (error) {
      throw error;
    }
  }
}
