import express from 'express'

 export const app = express()

//@ts-ignore
 app.get('/' ,(req:Request ,res:Response)=>{
    //@ts-ignore
    res.send("hi there")
 })