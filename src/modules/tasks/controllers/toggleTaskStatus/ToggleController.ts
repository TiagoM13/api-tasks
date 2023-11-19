import { Request, Response } from "express"

import { paramsSchema } from "@modules/tasks/schemas/task.schema"
import { ToggleTaskStatusService } from "./ToggleTaskStatusService"

class ToggleTaskStatusController {
  constructor(private toggleTaskStatus: ToggleTaskStatusService) { }

  async handle(req: Request, res: Response) {
    const { id } = paramsSchema.parse(req.params)

    const task = await this.toggleTaskStatus.execute(id)

    return res.status(200).json(task)
  }
}

export { ToggleTaskStatusController }
