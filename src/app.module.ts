import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medication } from './medication/entities/medication.entity';
import { Drone } from './drones/entities/drone.entity';
import { JwtModule } from '@nestjs/jwt';
import { DroneModule } from './drones/drone.module';
import { MedicationModule } from './medication/medication.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Drone, Medication],
      synchronize: true,
    }),
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '1h' },
    }),
    DroneModule,
    UserModule,
    MedicationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
