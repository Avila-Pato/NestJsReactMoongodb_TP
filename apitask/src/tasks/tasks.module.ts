/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Tasks, TaskSchema } from 'src/schemas/task.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // conectando a la base de datos
  imports: [MongooseModule.forFeature([
    {
        name: Tasks.name,
       schema: TaskSchema,
      }
  ])],

controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
