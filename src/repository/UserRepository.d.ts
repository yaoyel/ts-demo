import { Repository } from "typeorm";
import { Users } from "../entity/UserEntity";
export declare class UsersRepository {
    private userRepository;
    private entityManager;
    constructor(userRepository: Repository<Users>);
    findByEmail(email: string): Promise<Users[]>;
}
