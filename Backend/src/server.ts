
import { config } from "dotenv";
config({
    path:"./config.env"
})
import { app } from "./app";
import { conn } from "./db/conn";
conn()
const PORT:number = 4000

console.log(PORT)
app.listen( PORT,  ()=>{
    console.log(`listening on ${PORT}`)
})