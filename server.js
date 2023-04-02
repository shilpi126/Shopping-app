
import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import colors from "colors"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"
//configration env
dotenv.config()

//database config
connectDB();

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

//routes
app.use("/api/v1/auth", authRoutes)


app.get("/", (req,res) => {
    res.send({
        message: "Welcome to ecommerce app"
    })
})

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`.bgCyan.white);
})



