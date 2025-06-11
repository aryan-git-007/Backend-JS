import express from "express";
const app = express()
export {app}
app.use(express.json({
    limit:"10kb"
}))
app.use(express.urlencoded({extended:true,
    limit:"12kb"
}))
app.use(express.static("public"))

import cors from "cors";
app.use(cors({
   origin:process.env.CORS_ORIGIN,
   credentials:true
}))

import cookieParser from "cookie-parser";
app.use(cookieParser())
