"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const UserController_1 = require("./controllers/UserController");
const config = require("config");
const AuthController_1 = require("./controllers/AuthController");
const Utils = require("./utils/Utils");
routing_controllers_1.useContainer(typedi_1.Container);
typeorm_1.useContainer(typedi_1.Container);
typeorm_1.createConnection({
    driver: {
        type: "mysql",
        host: config.get("Mysql.host"),
        port: config.get("Mysql.port"),
        database: config.get("Mysql.database"),
        username: config.get("Mysql.username"),
        password: config.get("Mysql.password")
    },
    // logger: ["query", "error"],
    autoSchemaSync: true,
    entities: ["./entity/*.ts"]
}).then((connect) => __awaiter(this, void 0, void 0, function* () {
    console.log("connect");
}));
const koaApp = routing_controllers_1.createKoaServer({
    currentUserChecker: (action, value) => __awaiter(this, void 0, void 0, function* () {
        const token = action.request.headers["authorization"];
        if (!token)
            return null;
        var decodeToken = yield Utils.verify(token);
        return decodeToken.data;
    }),
    authorizationChecker: (action, roles) => __awaiter(this, void 0, void 0, function* () {
        const token = action.request.headers["authorization"];
        if (!token)
            return false;
        return yield Utils.verify(token).then((v) => { console.log(v); return true; })
            .catch((e) => { console.log(e); return false; });
    }),
    controllers: [
        UserController_1.UserController,
        AuthController_1.AuthController
    ]
});
/**
 * Start the koa app.
 */
koaApp.listen(3000);
console.log("Server is up and running at port 3000");
//# sourceMappingURL=app.js.map