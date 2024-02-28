import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DellsonyModule } from './dellsony/dellsony.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DellsonyModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
