"use strict"
import express from 'express';
import './config/mongoDB.js'
import { router as moviesRouter } from './routers/movies.js';
import {router as authRouter } from './routers/auth.js';

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.use("/api/v1/movies", moviesRouter)
app.use("/api/v1/auth", authRouter)

app.listen(PORT, (err)=>{
    err?console.log(`Server not running: ${err}`)
    :
    console.log(`Server up: http://localhost:${PORT}
        Ctrl+C to exit`)
})
