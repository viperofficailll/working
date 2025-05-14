import express, { Request, Response } from 'express'
import { z } from 'zod'
import Jwt from 'jsonwebtoken'

import bcryptjs from 'bcryptjs'
import { User } from './Models/User.model'
const JWT_SECRET = "FDFDFDFDF"

export const app = express()
app.use(express.json())



app.get('/', (req: Request, res: Response) => {

   res.send("hi there")
})



const requiredbody = z.object({
   email: z.string().min(3).max(100).email(),
   password: z.string()

})


app.post('/api/v1/users/signup', async (req: Request, res: Response) => {


   const { email, password } = req.body

   console.log(email)

   console.log(password)
   const parsedDatawithSuccss = requiredbody.safeParse(req.body)
   if (!parsedDatawithSuccss.success) {

      res.json({
         message: "Incorrect format",
         error: parsedDatawithSuccss.error
      })

   }
   const hashedpassword = await bcryptjs.hash(password, 10)
   try {
      const newuser = await User.create({
         email,
         password: hashedpassword

      })
      const token = Jwt.sign({ id: newuser._id }, JWT_SECRET)

      res.json({
         token: token
      })

   } catch (error) {

      res.json({ success: false, message: "email already exists" })

   }







})

app.post('/api/v1/users/signin', async (req: Request, res: Response) => {
   const { email, password } = req.body;
   const safepaarsed = requiredbody.safeParse(req.body)
   if (!safepaarsed) {
      res.json({ success: false, message: "inputs didnot meet the credentials" })
      return;
   }

   const user = await User.findOne({ email })
   if (user) {
      const verifieduser = await bcryptjs.compare(user.password, password)
      if (!verifieduser) {
         res.status(400).json({ message: "invalid password" })
         return
      }
      const token = Jwt.sign({ id: user._id }, JWT_SECRET)
      res.status(201).json({
         token: token
      })

   }
   else (res.json({ message: "incorrect credentials" }))




})

app.get('/api/v1/users/content',async(req:Request, res:Response)=>{
   const {link,tags} =req.body
})