import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) { }


    async execute(data: ICreateUserDTO) {
        console.log('> [CreateUserUseCase] start execute...')

        const userAlreadyExists = this.usersRepository.findByEmail(data.email)

        if (!userAlreadyExists)
            throw new Error('User already exists!')

        const user = new User(data)

        await this.usersRepository.save(user)
        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Equipe meu app',
                email: 'equipe@meuapp.com'
            },
            subject: 'Seja bem-vindo à plataforma',
            body: `<p>Você já pode fazer login em nossa plataforma </p>`
        })
        console.log('> [CreateUserUseCase] end execute...')
    }
}