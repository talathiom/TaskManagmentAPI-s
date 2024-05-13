import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userRepository } from './DTO/user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(userRepository)
        private readonly userRepository: userRepository) {}
}
