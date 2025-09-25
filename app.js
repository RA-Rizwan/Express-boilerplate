import express from "express"
import { userRoute } from "./src/routes/user.routes.js"
export const app = express()

app.use(express.json())

app.use("/api/users",userRoute)

