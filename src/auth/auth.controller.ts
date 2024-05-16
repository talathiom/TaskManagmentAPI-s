import { Body, Controller, Post } from '@nestjs/common';
import { authCredentialsDTO } from 'src/user/DTO/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post('/sign-up')
    signup(@Body() authCredentialsDTO:authCredentialsDTO): Promise<void>{
        return this.authService.signUp(authCredentialsDTO)
    }

    @Post('/sign-in')
    signIn(@Body() authCredentialsDTO:authCredentialsDTO):Promise<{token: string}>{
        return this.authService.signIn(authCredentialsDTO)
    }
    
}
