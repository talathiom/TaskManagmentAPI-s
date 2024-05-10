import {IsEnum, IsOptional, IsString } from "class-validator";
import { taskStatus } from "../taskStatus.enum";

export class searchDto {
    @IsOptional()
    @IsEnum(taskStatus)
    status?:taskStatus;

    @IsOptional()
    @IsString()
    search?:string
}