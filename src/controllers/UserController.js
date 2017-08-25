"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ybc on 2017/8/22.
 */
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const UserRepository_1 = require("../repository/UserRepository");
const LoggingMiddleware_1 = require("../middleware/LoggingMiddleware");
const User_1 = require("../model/User");
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    one(email) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield this.userRepository.findByEmail(email);
            return result;
        });
    }
    CreateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const u = user;
            console.log(u);
        });
    }
};
__decorate([
    routing_controllers_1.Get("/users/:email"),
    routing_controllers_1.Authorized(),
    __param(0, routing_controllers_1.Param("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "one", null);
__decorate([
    routing_controllers_1.Post("/users"),
    routing_controllers_1.UseAfter(LoggingMiddleware_1.LoggingMiddleware),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "CreateUser", null);
UserController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController(),
    __metadata("design:paramtypes", [UserRepository_1.UsersRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map