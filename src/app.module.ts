import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { task } from './task/dto/task.entity';
@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'172.19.0.1',
      port:5432,
      username:'user-name',
      password:'strong-password',
      database:'task-management',
      autoLoadEntities:true,
      entities: [task],
      synchronize:true,
    })

  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}


/*
PGADMIN_DEFAULT_EMAIL: user-name@domain-name.com
PGADMIN_DEFAULT_PASSWORD: strong-password
*/