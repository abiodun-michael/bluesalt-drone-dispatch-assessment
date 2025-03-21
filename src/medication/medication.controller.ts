import { Body, Controller, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { MedicationService } from './medication.service';
import { LoadMedicationDto } from './dto/load-medication.dto';

@Controller('medications')
export class MedicationController {
  constructor(private readonly medicationService: MedicationService) {}

  @Post()
  load(@Body() payload: LoadMedicationDto) {
    return this.medicationService.loadMedication(payload);
  }
}
