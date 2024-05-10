import { IsEnum } from "class-validator";
import { taskStatus } from "../taskStatus.enum";

export class updateTaskDto{
    @IsEnum(taskStatus)
    status:taskStatus
}