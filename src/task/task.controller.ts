import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TASK, taskStatus } from './task.model';
import { CreateTaskDto } from './dto/createTask.DTO';
import { searchDto } from './dto/search.DTO';
import { updateTaskDto } from './dto/update-task-status.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks(@Query() searchDto: searchDto): TASK[] {
    if (Object.keys(searchDto).length) {
      return this.taskService.getTasksWithFilter(searchDto);
    }
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): TASK {
    return this.taskService.createTask(createTaskDto);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): TASK {
    return this.taskService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): TASK[] {
    return this.taskService.deleteTask(id);
  }

  @Patch(':id/status')
  updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto:updateTaskDto,
  ): TASK {
    const {status}=updateTaskDto
    return this.taskService.updateTask(status, id);
  }
}
