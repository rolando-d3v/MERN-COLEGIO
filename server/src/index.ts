import express from "express";
import cors from "cors";
import morgan from 'morgan'
import config from "./config";


//config
import './config'
//db
import './db'


const app = express();
const port = config.port;
app.listen(port, () => {
  console.log(`🔥  🚀  Server run port ➡️  ${port} 😃  ✔️ `);
});

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}))
