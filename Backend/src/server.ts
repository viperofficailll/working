
import { app } from "./app";
import { config } from "dotenv";
config({
    path:'./config.env'
})
const port = process.env.PORT
console.log(port)
const PORT =4000
app.listen( PORT,  ()=>{
    console.log(`listening on ${PORT}`)
})