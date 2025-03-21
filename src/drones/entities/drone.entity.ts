import { Medication } from 'src/medication/entities/medication.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
export enum DroneModel {
  LIGHTWEIGHT = 'Lightweight',
  MIDDLEWEIGHT = 'Middleweight',
  CRUISERWEIGHT = 'Cruiserweight',
  HEAVYWEIGHT = 'Heavyweight',
}

export enum DroneState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  DELIVERING = 'DELIVERING',
  DELIVERED = 'DELIVERED',
  RETURNING = 'RETURNING',
}

@Entity()
export class Drone {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, unique: true })
  serialNumber: string;

  @Column({ type: 'text', enum: DroneModel })
  model: DroneModel;

  @Column({ type: 'float', default: 0 })
  weightLimit: number;

  @Column({ type: 'float', default: 100 })
  batteryCapacity: number;

  @Column({ type: 'text', enum: DroneState, default: DroneState.IDLE })
  state: DroneState;

  @OneToMany(() => Medication, (medication) => medication.drone, {
    cascade: true,
  })
  medications: Medication[];
}
