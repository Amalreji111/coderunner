import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodeRunnerModule } from './code-runner/code-runner.module';

@Module({
  imports: [CodeRunnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
