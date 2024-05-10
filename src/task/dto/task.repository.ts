import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { task } from './task.entity';
import { CreateTaskDto } from './createTask.DTO';
import { taskStatus } from '../taskStatus.enum';

@Injectable()
export class taskRepository extends Repository<task> {
  constructor(private dataSource: DataSource) {
    super(task, dataSource.createEntityManager());
  }

  async createTask(createTaskDto:CreateTaskDto):Promise<task>{

    const {
      title,description
    } = createTaskDto;

    const taskObj = this.create({
      TITLE:title,
      DESCRIPTION:description,
      STATUS:taskStatus.OPEN
    });

    await this.save(taskObj);
    return taskObj;
  }
}
