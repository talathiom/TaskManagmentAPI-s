import { IsEnum } from "class-validator";
import { taskStatus } from "../task.model";

export class updateTaskDto{
    @IsEnum(taskStatus)
    status:taskStatus
}