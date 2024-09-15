/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTasDto } from 'src/dto/update-task.dto';
import { Tasks } from 'src/schemas/task.schema';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Tasks.name) private taskModel: Model<Tasks>) {}

    findAll() {
       return this.taskModel.find();
    }
    async create(createTask:CreateTaskDto) {
        const newTask = new this.taskModel(createTask);
        return newTask.save();
    }
    async findOne(id: string) {
        return this.taskModel.findById(id);
    }
    async delete(id: string) {
        return this.taskModel.findByIdAndDelete(id);
    }
    async update(id: string, task: UpdateTasDto) {
        return this.taskModel.findByIdAndUpdate(id, task , {new: true});
    }
}