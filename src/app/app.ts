import '../../setupEnv';
import cors from 'cors'
import express from 'express';

import { errorHandler } from '@app/infra/middlewares/ErrorHandler'
import { notFoundHandler } from '@app/infra/middlewares/NotFoundHandler'
import { routes } from '@app/infra/http/routes';

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', routes)
app.use(errorHandler)
app.use(notFoundHandler)

export { app }
