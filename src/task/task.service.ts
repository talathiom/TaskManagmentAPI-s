import { Injectable } from '@nestjs/common';
import { TASK, taskStatus } from './task.model';
import {v4 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/createTask.DTO';

@Injectable()
export class TaskService {
    private tasks:TASK[] = [];
    
    getAllTasks():TASK[]{
        return this.tasks;
    }

    createTask(createTaskDto:CreateTaskDto):TASK{
        const { title,description} = createTaskDto;
        const task:TASK = {
            id:uuid(),
            title,
            description,
            status: taskStatus.OPEN
        }
        this.tasks.push(task);

        return task;
    }

    getTaskById(id:string):TASK{
        return this.tasks.find((task)=>task.id === id);
    }
}
