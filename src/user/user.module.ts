import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userRepository } from './DTO/user.repository';
import { user } from './DTO/user.entity';
import { authCredentialsDTO } from './DTO/auth-credentials.dto';

@Module({
  imports:[TypeOrmModule.forFeature([user])],
  providers: [UserService,userRepository,authCredentialsDTO],
  controllers: [UserController],
  exports:[userRepository,authCredentialsDTO]
})
export class UserModule {}
