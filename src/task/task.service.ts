import { Injectable, NotFoundException } from '@nestjs/common';
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
  /*private tasks: TASK[] = [];

  getAllTasks(): TASK[] {
    return this.tasks;
  }

  

  getTaskById(id: string): TASK {
    const task =  this.tasks.find((task) => task.id === id);
    if(!task){
        throw new NotFoundException(`Task with ID "${id}" not found`)
    }
    return task;
  }

  deleteTask(id: string): TASK[] {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }

  updateTask(status: taskStatus, id: string): TASK {
    const task = this.getTaskById(id);
    if (task) {
      task.status = status;
    }
    return task;
  }

  getTasksWithFilter(searchDto: searchDto): TASK[] {
    const { status, search } = searchDto;
    let tasks = this.getAllTasks();
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }
        return false;
      });
    }
    return tasks;
  }*/
}
