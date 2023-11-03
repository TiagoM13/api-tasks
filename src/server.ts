import express, { Response, Request } from 'express';
import { router as tasksRoutes } from './routes';

const app = express()

app.use(express.json())
app.use('/api', tasksRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`🚀 HTTP server running on http://localhost:${PORT}`))
