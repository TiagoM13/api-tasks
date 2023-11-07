import { Router } from "express";

import { taskRoutes } from "@app/modules/tasks/routes/tasks.routes";

const appRoutes = Router();

appRoutes.use('/tasks', taskRoutes)

export { appRoutes }
