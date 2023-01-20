import { PartialType } from '@nestjs/mapped-types';
import { CreateCodeRunnerDto } from './create-code-runner.dto';

export class UpdateCodeRunnerDto extends PartialType(CreateCodeRunnerDto) {}
