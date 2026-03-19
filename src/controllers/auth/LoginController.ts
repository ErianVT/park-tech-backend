import { Request, Response } from "express";
import LoginService from "../../services/auth/LoginService";


class LoginController {
    async handle(req: Request, res: Response) {
        const input = req.body;

        const service = new LoginService();
        const response = await service.execute(input)

        res.status(200).json(response);
    }
}

export default new LoginController();