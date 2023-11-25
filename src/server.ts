import { app } from "@app/app";

if (process.env.NODE_EN !== 'production') {
  app.listen(process.env.PORT ?? 3333, () => {
    console.log(`🚀 HTTP server running on http://localhost:${process.env.PORT ?? 3333}`)
  })
}
