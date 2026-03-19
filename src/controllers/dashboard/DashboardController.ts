import { Request, Response } from "express";
import GetDashboardService from "../../services/dashboard/GetDashboardService";

class DashboardController {
    async handle(req: Request, res: Response) {
        const period = req.query.period as "today" | "week" | "month" | "all";

        const service = new GetDashboardService();
        const response = await service.execute({ period });

        return res.status(200).json(response)
    }
}

export default new DashboardController;