import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.post('/users', (req, res) => {
    console.log('\n> [routes] /users')
    return createUserController.handle(req, res)
})

export { router }