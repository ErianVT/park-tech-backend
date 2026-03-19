import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth";
import { validateRole } from "../middlewares/validateRole";
import { UserRole } from "../generated/prisma/enums";
import DashboardController from "../controllers/dashboard/DashboardController";
import { validateQuerySchema } from "../middlewares/validateQuerySchema";
import { getDashboardSchema } from "../schemas/dashboard/getDashboard.schema";

const router = Router();
router.get("/dashboard",
    validateAuth,
    validateRole(UserRole.ADMIN),
    validateQuerySchema(getDashboardSchema),
    DashboardController.handle,
)
export default router;