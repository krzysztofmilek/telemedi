import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find();
  }

  async findOne(id: number): Promise<Task> {
    return await this.taskModel.findOne({ _id: id });
  }

  async create(task: Task): Promise<Task> {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }

  async delete(id: number): Promise<Task> {
    return await this.taskModel.findByIdAndRemove(id);
  }

  async update(_id: number, task: Task): Promise<Task> {
    return await this.taskModel.findByIdAndUpdate(_id, task, { new: true });
  }
}
