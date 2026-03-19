import z from "zod";


export const getDashboardSchema = z.object({
    period: z.enum(["today", "week", "month", "all"]).optional(),
}).strict()