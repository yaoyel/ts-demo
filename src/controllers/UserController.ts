/**
 * Created by ybc on 2017/8/22.
 */
import "reflect-metadata";
import {
    JsonController, Get, Post, UseAfter, Action, Param, UseBefore, Authorized, Body,
    HttpCode
} from "routing-controllers"
import {Service} from "typedi";
import {UsersRepository} from "../repository/UserRepository";
import * as jwt from "jsonwebtoken";
import {Users} from "../entity/UserEntity";
import {LoggingMiddleware} from "../middleware/LoggingMiddleware";
import {User} from "../model/User";

@Service()
@JsonController()
export class UserController{
    constructor(private  userRepository:UsersRepository){
    }

    @Get("/users/:email")
    @Authorized()
    public async  one(@Param("email") email:string):Promise<Users[]> {
        var result = await this.userRepository.findByEmail(email);
        return result;
    }

    @Post("/users")
    @UseAfter(LoggingMiddleware)
    @HttpCode(201)
    public async CreateUser(@Body() user:User)
    {
        const u=user;
        console.log(u);
    }


}

