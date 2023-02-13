import express, { Response, Request } from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import UserModel from './../models/User.js';
import {config} from 'dotenv'

const PORT = 5000 || process.env.PORT
config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
mongoose.set('strictQuery', false)

app.post("/register", async (req: Request, res: Response) =>{

  const infoUser = req.body;

  const newUser = new UserModel({
    username: infoUser.username,
    email: infoUser.email,
    password: infoUser.password,
    passwordCheck: infoUser.passwordCheck
  })

  const createdUser = await newUser.save().then(() => console.log("Usuário adicionado"));
  res.json(createdUser);

})

mongoose.connect(process.env.CONNECTION_URL!).then(() => {
  console.log(`Conectado na porta ${PORT}`);
  app.listen(PORT);
});
