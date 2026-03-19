import express  from "express";
import type { Request, Response } from 'express';
import dotenv from 'dotenv'
import { cardsRouters } from "./routers/cards.routers.ts";
const server = express();
dotenv.config();




server.use('/cards', cardsRouters);

// server.get('/', (req: Request, res: Response)=>{
//     res.status(200).json({
//         status: 200
//     })
// })


server.listen(process.env.PORT, ()=>{
    console.log("start server "+process.env.PORT);
    
})
