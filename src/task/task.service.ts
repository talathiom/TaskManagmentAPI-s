import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { taskStatus } from './taskStatus.enum';
import { CreateTaskDto } from './dto/createTask.DTO';
import { searchDto } from './dto/search.DTO';
import { taskRepository } from './dto/task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { task } from './dto/task.entity';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(taskRepository)
    private readonly taskRepository: taskRepository,
  ) {}

  async getTaskById(id: string): Promise<task>{
    const found = await this.taskRepository.findOne({where:{ID:id}});
    if(!found){
      throw new NotFoundException(`Task with ID "${id}" not found`)
    }
    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void>{
    const result = await this.taskRepository.delete(id);
    if(result.affected === 0){
      throw new NotFoundException(`Task with ID "${id}" not found`)
    }
  }

  async updateTask(status: taskStatus, id: string): Promise<task> {
    const taskObj = await this.getTaskById(id);
    if (taskObj) {
      taskObj.STATUS = status;
    }
    await this.taskRepository.save(taskObj)
    return taskObj;
  }

  async getTasks(searchDto:searchDto):Promise<task[]>{
    return this.taskRepository.getTasks(searchDto);
  }
}
