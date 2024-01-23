import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import cors from 'cors'
import {Request, Response} from "express";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true}));

const server = http.createServer(app);


app.use('/', (req:Request, res:Response)=>{
    if(req.accepts('json')){
        res.status(200).json({message: 'Hello World'});
    } else if(req.accepts('html')){
        res.sendFile(__dirname + '/index.html');
    }
})


server.listen(process.env.PORT, ()=>{console.log(`Server is running on port ${process.env.PORT}`)});
