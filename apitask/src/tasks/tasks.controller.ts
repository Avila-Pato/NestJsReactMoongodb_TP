/* eslint-disable prettier/prettier */
import { Body, ConflictException, Controller, Delete, Get, HttpCode, Param, Post, Put,  NotFoundException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { Types } from 'mongoose';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    @HttpCode(200)
    findAll() {
        return this.tasksService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        // Validar si el id es un ObjectId válido
        if (!Types.ObjectId.isValid(id)) {
            throw new NotFoundException('ID no válido');
        }

        const task = await this.tasksService.findOne(id);
        if (!task) {
            throw new NotFoundException('Tarea no encontrada');
        }
        return task;
    }

    @Post()
    async createPost(@Body() body: CreateTaskDto) {
        try {
            return await this.tasksService.create(body);
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('La tarea ya existe'); // 409 Conflict
            }
            throw error;
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        // Validar si el id es un ObjectId válido
        if (!Types.ObjectId.isValid(id)) {
            throw new NotFoundException('ID no válido');
        }

        const task = await this.tasksService.findOne(id);
        if (!task) {
            throw new NotFoundException('Tarea no encontrada');
        }

        try {
            const result = await this.tasksService.delete(id);
            if (!result) {
                throw new ConflictException('No se puede eliminar la tarea debido a un conflicto'); // 409 Conflict
            }
            return { message: 'Tarea eliminada correctamente' };
        } catch (error) {
            throw error; // Re-lanzar el error si ocurre otro
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: CreateTaskDto) {
        // Validar si el id es un ObjectId válido
        if (!Types.ObjectId.isValid(id)) {
            throw new NotFoundException('ID no válido');
        }
    
        const task = await this.tasksService.findOne(id);
        if (!task) {
            throw new NotFoundException('Tarea no encontrada');
        }
    
        try {
            const updatedTask = await this.tasksService.update(id, body);
            if (!updatedTask) {
                throw new ConflictException('No se puede actualizar la tarea debido a un conflicto'); // 409 Conflict
            }
            return updatedTask;
        } catch (error) {
            throw error; // Re-lanzar el error si ocurre otro
        }
    }
}    