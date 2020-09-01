export interface IMailConnection {
    host: string
    port: number
    auth: {
        user: string
        pass: string
    }
}

interface IAddress {
    email: string
    name: string
}

export interface IMessage {
    to: IAddress
    from: IAddress
    subject: string
    body: string
}

export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>
}