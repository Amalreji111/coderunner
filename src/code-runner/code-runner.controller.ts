import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CodeRunnerService } from './code-runner.service';
import { CreateCodeRunnerDto } from './dto/create-code-runner.dto';
import { UpdateCodeRunnerDto } from './dto/update-code-runner.dto';

@Controller('run')
export class CodeRunnerController {
  constructor(private readonly codeRunnerService: CodeRunnerService) {}
  @Post()
  async runCode(@Body() body: CreateCodeRunnerDto) {
    return this.codeRunnerService.run(body);
  }
}
