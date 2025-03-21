import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { DroneState } from '../entities/drone.entity';
import { Type } from 'class-transformer';

export class QueryDroneDTO {
  @ApiProperty()
  @Type(() => Number) // Convert query param to a number
  @IsNumber()
  @Min(1)
  page: number;

  @ApiProperty()
  @Type(() => Number) // Convert query param to a number
  @IsNumber()
  @Min(1)
  limit: number;

  @ApiProperty({ enum: DroneState })
  @IsEnum(DroneState)
  @IsNotEmpty()
  state: DroneState;
}
