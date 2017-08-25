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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ybc on 2017/8/23.
 */
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
let AuthController = class AuthController {
    login() {
        var cert = fs.readFileSync(path.join(__dirname, "../", "config", "ssl", "private.key"));
        var token = jwt.sign({
            data: { "name": "ybc", "nickName": "yooyle", "org": "chrd" }
        }, cert, { algorithm: "RS256", expiresIn: "1h" });
        return { token };
    }
    userInfo(user) {
        return user;
    }
};
__decorate([
    routing_controllers_1.Get("/auth/token"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AuthController.prototype, "login", null);
__decorate([
    routing_controllers_1.Get("/auth/userInfo"),
    routing_controllers_1.Authorized(),
    __param(0, routing_controllers_1.CurrentUser({ required: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "userInfo", null);
AuthController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.Controller()
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map