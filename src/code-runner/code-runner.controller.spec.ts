import { Test, TestingModule } from '@nestjs/testing';
import { CodeRunnerController } from './code-runner.controller';
import { CodeRunnerService } from './code-runner.service';

describe('CodeRunnerController', () => {
  let controller: CodeRunnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeRunnerController],
      providers: [CodeRunnerService],
    }).compile();

    controller = module.get<CodeRunnerController>(CodeRunnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
