import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { CreateTask } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateTask): Promise<Task> {
    return this.tasksService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Task> {
    return this.tasksService.delete(id);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateTask, @Param('id') id): Promise<Task> {
    return this.tasksService.update(id, updateItemDto);
  }

  @Patch(':id')
  Patch(@Body() updateItemDto: CreateTask, @Param('id') id): Promise<Task> {
    return this.tasksService.update(id, updateItemDto);
  }
}
