import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body

        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password
            })

            console.log('> [CreateUserController] Usuário cadastrado com sucesso!')

            return res.status(201).send({
                message: 'Usuário cadastrado com sucesso!'
            })
        } catch (error) {
            console.log('> [CreateUserController] Unexpected error!')
    
            return res.status(401).json({
                message: error.message || 'Unexpected error!'
            })
        }
    }
}