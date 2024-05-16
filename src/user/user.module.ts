import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userRepository } from './DTO/user.repository';
import { user } from './DTO/user.entity';
import { authCredentialsDTO } from './DTO/auth-credentials.dto';
import { session_details } from 'src/tokens/dto/session_details.entity';
import { TokensModule } from 'src/tokens/tokens.module';

@Module({
  imports:[TypeOrmModule.forFeature([user])],
  providers: [UserService,userRepository,authCredentialsDTO],
  controllers: [UserController],
  exports:[userRepository,authCredentialsDTO,TypeOrmModule]
})
export class UserModule {}
