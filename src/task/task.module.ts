import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { taskRepository } from './dto/task.repository';
import { task } from './dto/task.entity';

@Module({
  imports:[TypeOrmModule.forFeature([task,taskRepository])],
  controllers: [TaskController],
  providers: [TaskService,taskRepository]
})
export class TaskModule {}
