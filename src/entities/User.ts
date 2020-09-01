import { v4 } from 'uuid'

export class User {
    public readonly id: string

    public name: string
    public email: string
    public password: string

    constructor(props: Omit<User, 'id'>, id?: string) {
        // Passa a assinatura das propriedades para as propriedades da classe
        // Exemplo: this.name = props.name
        Object.assign(this, props)

        // Não deixar a responsabilidade de criar ID para o banco de dados
        if (!id)
            this.id = v4()
    }
}