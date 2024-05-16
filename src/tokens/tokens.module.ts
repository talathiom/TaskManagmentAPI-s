import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TokensService } from './tokens.service';
import { session_details } from './dto/session_details.entity';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sessionDetailsRepository } from './dto/session_details.repository';

@Module({
    imports:[
      TypeOrmModule.forFeature([session_details]), UserModule,
        PassportModule.register({defaultStrategy:'jwt'}),
        JwtModule.register({
          secret:'T@T',
          signOptions:{
            expiresIn:3600
          }
        })
      ],
    providers: [TokensService,sessionDetailsRepository],
    exports:[TokensService,TypeOrmModule,]
})
export class TokensModule {}
