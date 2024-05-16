import { session_details } from "src/tokens/dto/session_details.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { roles } from "../roles.enum";

@Entity()
export class user{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({unique:true})
    username:string;

    @Column()
    password:string;

    @Column({default:roles.Employee})
    role:roles;

    @OneToMany(() => session_details, session_details => session_details.user)
    session_details: session_details[];

}