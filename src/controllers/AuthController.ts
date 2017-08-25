/**
 * Created by ybc on 2017/8/23.
 */
import {JsonController, Get, Post, Param, Controller, Authorized, CurrentUser} from "routing-controllers";
import {Service} from "typedi";
import {UsersRepository} from "../repository/UserRepository";
import  * as  jwt from "jsonwebtoken";
import * as fs from "fs";
import * as path from "path";

@Service()
@Controller()
export class AuthController{
    @Get("/auth/token")
    login():any
    {
        var cert= fs.readFileSync(path.join(__dirname,"../","config","ssl","private.key"));
        var token=jwt.sign({
                data:{"name":"ybc","nickName":"yooyle","org":"chrd"}},
            cert,{algorithm:"RS256",expiresIn:"1h"});
        return {token};
    }

    @Get("/auth/userInfo")
    @Authorized()
    userInfo(@CurrentUser({required:true})user:any)
    {
        return user;

    }
}
