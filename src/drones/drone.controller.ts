import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  UseGuards,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { DroneService } from './drone.service';
import { CreateDroneDto } from './dto/create-drone.dto';
import { DroneState } from './entities/drone.entity';
import { QueryDroneDTO } from './dto/query-drone.dto';

@Controller('drones')
export class DroneController {
  constructor(private droneService: DroneService) {}

  @Get('states')
  getStates() {
    return Object.values(DroneState);
  }

  @Post()
  registerDrone(@Body() dto: CreateDroneDto) {
    return this.droneService.registerDrone(dto);
  }

  @Get()
  getAllDrones(@Query() query: QueryDroneDTO) {
    return this.droneService.getAllDrones(query);
  }

  @Get(':id/battery')
  checkBatteryLevel(@Param('id', ParseUUIDPipe) id: string) {
    return this.droneService.checkBatteryLevel(id);
  }

  @Get(':id/medications')
  getMedications(@Param('id', ParseUUIDPipe) id: string) {
    return this.droneService.getMedications(id);
  }
}
