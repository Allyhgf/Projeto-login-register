import express, { Response, Request } from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

const PORT = 5000 || process.env.PORT

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) =>{
  res.send("<h1> Hello World! </h1>")
})

app.listen(PORT, () => {
  console.log(`Servidor conectado com sucesso na porta ${PORT}`)
})