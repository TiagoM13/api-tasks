import { app } from "@app/app";

const PORT = process.env.PORT;

process.env.NODE_ENV = 'production'

app.listen(PORT, () => {
  console.log(`🚀 HTTP server running on http://localhost:${PORT}`)
})
