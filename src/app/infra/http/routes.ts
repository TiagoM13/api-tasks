import { Router } from "express";

import { taskRoutes } from "@modules/tasks/routes/tasks.routes";

const routes = Router();

routes.use('/tasks', taskRoutes)

export { routes }
