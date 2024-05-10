import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { task } from './task.entity';
import { CreateTaskDto } from './createTask.DTO';
import { taskStatus } from '../taskStatus.enum';
import { searchDto } from './search.DTO';

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

  async getTasks(searchDto:searchDto):Promise<task[]>{
    const {status,search} = searchDto;
    const query = this.createQueryBuilder('task');
    if (status){
      query.andWhere('task.STATUS = :status',{status});
    }
    if(search){
      query.andWhere('(LOWER(task.TITLE) LIKE LOWER(:search) OR LOWER(task.DESCRIPTION) LIKE LOWER(:search))',{search:`%${search}%`});
    }
    const tasks = await query.getMany();
    return tasks;
  }
}
