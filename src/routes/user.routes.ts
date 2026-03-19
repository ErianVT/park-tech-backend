import { Router } from "express";
import CreateUserController from "../controllers/users/CreateUserController";
import { validateSchema } from "../middlewares/validateSchema";
import { createUserSchema } from "../schemas/users/createUser.schema";
import { validateAuth } from "../middlewares/validateAuth";
import { validateRole } from "../middlewares/validateRole";
import { UserRole } from "../generated/prisma/browser";
import GetUsersController from "../controllers/users/GetUsersController";


const router = Router();

router.post("/user",
    validateAuth,
    validateRole(UserRole.ADMIN),
    validateSchema(createUserSchema),
    CreateUserController.handle,
);
router.get("/users",
    validateAuth,
    validateRole(UserRole.ADMIN),
    GetUsersController.handle,
);

export default router;