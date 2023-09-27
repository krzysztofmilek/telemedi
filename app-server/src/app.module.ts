import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [TaskModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
