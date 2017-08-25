/**
 * Created by ybc on 2017/8/22.
 */
import "reflect-metadata";
import { UsersRepository } from "../repository/UserRepository";
import { Users } from "../entity/UserEntity";
import { User } from "../model/User";
export declare class UserController {
    private userRepository;
    constructor(userRepository: UsersRepository);
    one(email: string): Promise<Users[]>;
    CreateUser(user: User): Promise<void>;
}
