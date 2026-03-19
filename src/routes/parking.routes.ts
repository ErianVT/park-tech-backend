import { Router } from "express";
import CreateParkingRecordController from "../controllers/parking/CreateParkingRecordController";
import { validateAuth } from "../middlewares/validateAuth";
import { validateSchema } from "../middlewares/validateSchema";
import { createParkingRecordSchema } from "../schemas/parking/createParkingRecord.schema";
import { updateParkingRecordSchema } from "../schemas/parking/updateParkingRecord.schema";
import UpdateParkingRecordController from "../controllers/parking/UpdateParkingRecordController";
import GetParkingRecordsController from "../controllers/parking/GetParkingRecordsController";
import { validateQuerySchema } from "../middlewares/validateQuerySchema";
import { getQueryParkingRecordSchema } from "../schemas/parking/getQueryParkingRecord.schema";
import ExitParkingRecordController from "../controllers/parking/ExitParkingRecordController";
import GetParkingRecordPriceController from "../controllers/parking/GetParkingRecordPriceController";

const router = Router();

router.post("/parking",
    validateAuth,
    validateSchema(createParkingRecordSchema),
    CreateParkingRecordController.handle
);

router.post("/parking/:id/exit",
    validateAuth,
    ExitParkingRecordController.handle,
)

router.get("/parking/:id/price",
    validateAuth,
    GetParkingRecordPriceController.handle,
)

router.put("/parking/:id",
    validateAuth,
    validateSchema(updateParkingRecordSchema),
    UpdateParkingRecordController.handle
)

router.get("/parking",
    validateAuth,
    validateQuerySchema(getQueryParkingRecordSchema),
    GetParkingRecordsController.handle)

export default router;