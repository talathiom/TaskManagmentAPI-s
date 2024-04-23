import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { TASK, taskStatus } from './task.model';
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

    @Get('/:id')
    getTaskById(@Param('id') id:string):TASK{
        return this.taskService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id:string):TASK[]{
        console.log("here");
        return this.taskService.deleteTask(id);
    }

    @Patch(':id/status')
    updateTask(
        @Param('id') id :string,
        @Body('status') status:taskStatus
    ):TASK{
        return this.taskService.updateTask(status,id);
    }

}
