/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    // creando constructor para poder pedir consultas al servidor
    constructor(private tasksService: TasksService) {}
    @Get()
    findAll(){
        return this.tasksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.tasksService.findOne(id);
        
    }

    @Post()
    createPost(@Body() body: CreateTaskDto){
       return this.tasksService.create(body);

        
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.tasksService.delete(id);
        

    }
    @Put(':id')
    update(@Param('id') id: string, @Body() body: CreateTaskDto){
        return this.tasksService.update(id, body);
        
    }
    


}
