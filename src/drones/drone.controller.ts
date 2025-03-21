import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { DroneService } from './drone.service';
import { CreateDroneDto } from './dto/create-drone.dto';
import { DroneState } from './entities/drone.entity';

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
  getAvailableDrones() {
    return this.droneService.getAllDrones();
  }

  @Get('/battery/:id')
  checkBatteryLevel(@Param('id', ParseUUIDPipe) id: string) {
    return this.droneService.checkBatteryLevel(id);
  }
}
