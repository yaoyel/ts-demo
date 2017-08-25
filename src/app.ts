import "reflect-metadata";
import {createKoaServer, useContainer as routingContainer, Action,} from "routing-controllers";
import {Container} from "typedi";
import {createConnection, useContainer as ormUseContainer, Connection} from "typeorm";
import {UserController} from "./controllers/UserController";
import  * as config from "config";
import {AuthController} from "./controllers/AuthController";
import * as Utils from "./utils/Utils";

routingContainer(Container);
ormUseContainer(Container);
createConnection({
    driver:{
    type:"mysql",
    host:config.get("Mysql.host"),
    port:config.get("Mysql.port"),
    database:config.get("Mysql.database"),
    username:config.get("Mysql.username"),
    password:config.get("Mysql.password")
    },
   // logger: ["query", "error"],

    entities:["./entity/*.ts"]

}).then(async connect=>{
  console.log("connect");
});



const koaApp = createKoaServer({
    currentUserChecker:async(action:Action,value?:any)=>{
        const token=action.request.headers["authorization"];

        if(!token) return null;

        var decodeToken=await Utils.verify(token);
        return decodeToken.data;

    },
    authorizationChecker:async (action:Action,roles:string[]):Promise<boolean>=> {
        const token = action.request.headers["authorization"];

        if(!token)
            return false;

        return await Utils.verify(token).then((v)=>{console.log(v);return true;})
            .catch((e)=>{console.log(e); return false});
    },

    controllers: [
        UserController,
        AuthController
    ]
});


/**
 * Start the koa app.
 */
koaApp.listen(3000);

console.log("Server is up and running at port 3000");