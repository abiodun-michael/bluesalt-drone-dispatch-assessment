import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { DroneModel, DroneState } from '../entities/drone.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDroneDto {
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  serialNumber: string;

  @ApiProperty()
  @IsEnum(DroneModel)
  model: DroneModel;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(500)
  weightLimit: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  batteryCapacity: number;

  @ApiProperty()
  @IsEnum(DroneState)
  state: DroneState;
}
