import { IMailProvider, IMessage, IMailConnection } from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";
import dotenv from 'dotenv'

dotenv.config()

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail

    constructor() {
        const config: IMailConnection = {
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT),
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        }
        
        console.log('> [MailtrapMailProvider] creating instance...')
        this.transporter = nodemailer.createTransport(config)
    }

    async sendMail(message: IMessage): Promise<void> {
        console.log('> [MailtrapMailProvider] sendEmail...')

        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}