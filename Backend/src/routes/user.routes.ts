import express from 'express'
import { ContentHandeler, getContent, signinhandeler, signuphandeler } from '../Controllers/user.controller'
import { Usermiddleware } from '../middleware/user.auth'
export const Userrouter =  express.Router()
Userrouter.post('/signup', signuphandeler)
Userrouter.post('/signin', signinhandeler) 
//@ts-ignore
Userrouter.post('/content', Usermiddleware,ContentHandeler) 
Userrouter.get('/content', Usermiddleware, getContent) 