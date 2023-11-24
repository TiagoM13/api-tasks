import { app } from "@app/app";

app.listen(process.env.PORT || 3333, () => {
  console.log(`🚀 HTTP server running on http://localhost:${process.env.PORT || 3333}`)
})

