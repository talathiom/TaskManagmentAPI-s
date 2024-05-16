import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { authCredentialsDTO } from 'src/user/DTO/auth-credentials.dto';
import { userRepository } from 'src/user/DTO/user.repository';
import * as bcrypt from "bcrypt";
import { TokensService } from 'src/tokens/tokens.service';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(userRepository)
        private readonly userRepository: userRepository,
        private readonly tokenService:TokensService
    ) {}
        

    async signUp(authCredentialsDTO:authCredentialsDTO):Promise<void>{
        return this.userRepository.createUser(authCredentialsDTO);
    }

    async signIn(authCredentialsDTO:authCredentialsDTO):Promise<{token: string}>{
        const {username,password} = authCredentialsDTO;

        const userDetails = await this.userRepository.findOne({where:{username}});
        
        if(userDetails && (await bcrypt.compare(password,userDetails.password))){
            return await this.tokenService.generateToken(userDetails.id)
            
        }else{
            throw new UnauthorizedException(
               "User Credentials not found"
            )
        }
        
    }

}
