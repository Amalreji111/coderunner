import { Module } from '@nestjs/common';
import { CodeRunnerService } from './code-runner.service';
import { CodeRunnerController } from './code-runner.controller';

@Module({
  controllers: [CodeRunnerController],
  providers: [CodeRunnerService]
})
export class CodeRunnerModule {}
