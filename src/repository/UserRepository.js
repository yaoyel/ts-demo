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
const typeorm_1 = require("typeorm");
const typedi_1 = require("typedi");
const UserEntity_1 = require("../entity/UserEntity");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
let UsersRepository = class UsersRepository {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findByEmail(email) {
        return this.userRepository.find();
    }
};
__decorate([
    typeorm_typedi_extensions_1.OrmEntityManager(),
    __metadata("design:type", typeorm_1.EntityManager)
], UsersRepository.prototype, "entityManager", void 0);
UsersRepository = __decorate([
    typedi_1.Service(),
    __param(0, typeorm_typedi_extensions_1.OrmRepository(UserEntity_1.Users)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=UserRepository.js.map