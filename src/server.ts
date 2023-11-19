import { app } from "@app/app";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🚀 HTTP server running on http://localhost:${PORT}`)
})
