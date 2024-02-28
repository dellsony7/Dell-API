import { Test, TestingModule } from '@nestjs/testing';
import { DellsonyController } from './dellsony.controller';

describe('DellsonyController', () => {
  let controller: DellsonyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DellsonyController],
    }).compile();

    controller = module.get<DellsonyController>(DellsonyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
