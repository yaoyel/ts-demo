/**
 * Created by ybc on 2017/8/22.
 */
import {Users} from "../entity/UserEntity";
import {validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";

 export  class User{
     @Length(3,10,{message:"name is not "})
    public name:string;

     @IsEmail({},{message:"gogogog"})
    public email:string;
    public createdAt:Date;

}


