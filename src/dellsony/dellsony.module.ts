import { Module } from '@nestjs/common';
import { DellsonyController } from './dellsony.controller';
import { DellsonyService } from './dellsony.service';

@Module({
  controllers: [DellsonyController],
  providers: [DellsonyService]
})
export class DellsonyModule {}
