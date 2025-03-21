import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Drone } from '../../drones/entities/drone.entity';

@Entity()
export class Medication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'float' })
  weight: number;

  @Column()
  code: string;

  @Column()
  image: string;

  @ManyToOne(() => Drone, (drone) => drone.medications, { onDelete: 'CASCADE' })
  drone: Drone;
}
