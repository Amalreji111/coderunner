import { Test, TestingModule } from '@nestjs/testing';
import { CodeRunnerService } from './code-runner.service';

describe('CodeRunnerService', () => {
  let service: CodeRunnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeRunnerService],
    }).compile();

    service = module.get<CodeRunnerService>(CodeRunnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
