/**
 * Created by ybc on 2017/8/21.
 */
import {Entity, PrimaryColumn,Column} from  "typeorm";

@Entity()
export class Users{
    @PrimaryColumn("int",{generated:true})
    id:number;

    @Column()
    fullName:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    createdAt:Date;

}