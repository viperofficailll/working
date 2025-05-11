
import { config } from "dotenv";
config({
    path:"./config.env"
})
import { app } from "./app";
import { conn } from "./db/conn";
conn()


const PORT =4000
app.listen( PORT,  ()=>{
    console.log(`listening on ${PORT}`)
})