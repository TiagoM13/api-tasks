import express from 'express';

import { appRoutes } from '@app/routes/app.routes';

const app = express()

app.use(express.json())
app.use('/api', appRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`🚀 HTTP server running on http://localhost:${PORT}`))
