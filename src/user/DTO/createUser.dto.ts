import { IsString, Matches, MaxLength, MinLength } from "class-validator";
import { roles } from "../roles.enum";

export class authCredentialsDTO {
    @IsString()
    @MinLength(4)
    @MaxLength(10)
    username:string;

    @IsString()
    @MinLength(6)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{message: 'Password needs atleast 6 chars with  atleast 1 Capital , 1 small case , 1 numerical value, and 1 special char'})
    password:string;

    @IsString()
    role:roles
}