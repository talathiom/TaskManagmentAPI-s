import { Injectable } from '@nestjs/common';
import { jwtPayload } from './jwtPayload.interface';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { sessionDetailsRepository } from './dto/session_details.repository';

@Injectable()
export class TokensService {
    constructor(
        private readonly jwtService:JwtService,
        
        @InjectRepository(sessionDetailsRepository)
        private readonly sessionDetailsRepo:sessionDetailsRepository 
    ){}
    async generateToken(uuid):Promise<{token:string}>{
        const payload:jwtPayload = {uuid}
        const jwt = await this.jwtService.sign(payload);
        return {
            token:jwt
        };
    }
}
