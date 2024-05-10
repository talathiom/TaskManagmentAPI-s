import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { taskStatus } from "../taskStatus.enum";

@Entity()
export class task{
    @PrimaryGeneratedColumn('uuid')
    ID:string;

    @Column()
    TITLE:string;

    @Column()
    DESCRIPTION:string;

    @Column()
    STATUS:taskStatus;
}