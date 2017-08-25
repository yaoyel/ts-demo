import {Repository,EntityManager} from "typeorm";
import {Service} from "typedi";
import {Users} from "../entity/UserEntity";
import {OrmRepository,OrmEntityManager} from "typeorm-typedi-extensions";

@Service()
export class UsersRepository {

    @OrmEntityManager()
    private entityManager:EntityManager;

    constructor(@OrmRepository(Users) private  userRepository:Repository<Users>){}
    public findByEmail(email: string) {
        return this.userRepository.find();
    }
}