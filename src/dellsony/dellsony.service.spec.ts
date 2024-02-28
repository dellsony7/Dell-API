import { Test, TestingModule } from '@nestjs/testing';
import { DellsonyService } from './dellsony.service';

describe('DellsonyService', () => {
  let service: DellsonyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DellsonyService],
    }).compile();

    service = module.get<DellsonyService>(DellsonyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
