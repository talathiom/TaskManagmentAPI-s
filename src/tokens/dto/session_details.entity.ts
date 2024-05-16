
import { user } from "src/user/DTO/user.entity";
import { Column, Entity, IsNull, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class session_details{


@PrimaryGeneratedColumn()
id: number;

@Column()
uuid: string;

@Column()
token: string;

@Column({default:'Active',comment:'Active|Expire'})
status:string;

@Column({nullable:true})
role:string;

@Column()
created_on:string;

@Column()
expires_at:string;

@ManyToOne(() => user, user => user.session_details)
@JoinColumn({ name: 'uuid', referencedColumnName: 'id' })
    user: user;
}