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
import { taskStatus } from './taskStatus.enum';
import { CreateTaskDto } from './dto/createTask.DTO';
import { searchDto } from './dto/search.DTO';
import { updateTaskDto } from './dto/update-task-status.dto';
import { task } from './dto/task.entity';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<task> {
    return this.taskService.getTaskById(id);
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<task> {
    return this.taskService.createTask(createTaskDto);
  }


/*
  @Get()
  getTasks(@Query() searchDto: searchDto): TASK[] {
    if (Object.keys(searchDto).length) {
      return this.taskService.getTasksWithFilter(searchDto);
    }
    return this.taskService.getAllTasks();
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
*/
}
