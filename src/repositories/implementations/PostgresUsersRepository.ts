import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class PostgresUsersRepository implements IUsersRepository {
    private users: User[] = []

    async findByEmail(email): Promise<User> {
        console.log('> [PostgresUsersRepository] findByEmail...')

        const user = this.users.find(user => user.email === email)

        return user
    }

    async save(user: User): Promise<void> {
        console.log('> [PostgresUsersRepository] save...')
        
        this.users.push(user)
    }
}