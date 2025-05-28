import express from 'express';
import {
  ContentHandeler,
  deletecontenthandeler,
  getContent,
  sharehandeler,
  signinhandeler,
  signuphandeler,
  viewsharedhandeler
} from '../Controllers/user.controller';
import { Usermiddleware } from '../middleware/user.auth';

export const Userrouter = express.Router();

Userrouter.post('/signup', signuphandeler);
Userrouter.post('/signin', signinhandeler);
//@ts-ignore
Userrouter.post('/content', Usermiddleware, ContentHandeler);
Userrouter.get('/content', Usermiddleware, getContent);
Userrouter.delete('/content', Usermiddleware, deletecontenthandeler);
//@ts-ignore
Userrouter.get('/getshared/:sharelink', viewsharedhandeler);
//@ts-ignore
Userrouter.post('/share', Usermiddleware, sharehandeler);
