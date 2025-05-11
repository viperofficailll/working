import express from 'express'
import {string, z} from 'zod'
const requiredbody =z.object({
email:z.string().min(3).max(100).email(),
name:z.string().min(3).max(10),
password:z.string()

})
 export const app = express()
 app.use(express.json())

//@ts-ignore
 app.get('/' ,(req:Request ,res:Response)=>{
    //@ts-ignore
    res.send("hi there")
 })

 //@ts-ignore
 app.post('/api/v1/signup' ,(req:Request ,res:Response)=>{
   //@ts-ignore
 
   
   const {username ,password} = req.body
   console.log(username)

   console.log(password)
   const parsedDatawithSuccss = requiredbody.safeParse(req.body)
   if (!parsedDatawithSuccss.success){
      //@ts-ignore
      res.json({
         message:"Incorrect format",
         error:parsedDatawithSuccss.error
      })
   }
   //@ts-ignore
   res.json({
      success:true,
      message:"signup success"
   })


})

//@ts-ignore
app.post('/api/v1/login' ,(req:Request ,res:Response)=>{
   //@ts-ignore
   res.send("hi there")
})