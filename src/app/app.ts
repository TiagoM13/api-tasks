import express from 'express';

import { appRoutes } from './routes/app.routes';

const app = express()

app.use(express.json())
app.use('/api', appRoutes)

export { app }
