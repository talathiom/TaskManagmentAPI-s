import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { TASK } from './task.model';
import { CreateTaskDto } from './dto/createTask.DTO';

@Controller('task')
export class TaskController {
    constructor(private taskService:TaskService){
    }

    @Get()
    getAllTasks():TASK[]{
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() createTaskDto:CreateTaskDto):TASK{
        return this.taskService.createTask(createTaskDto);
    }
}
