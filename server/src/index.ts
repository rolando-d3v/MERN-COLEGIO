import express from "express";
import cors from "cors";
import morgan from 'morgan'
import config from "./config/config";


//config
import './config/config'


//db
import './config/db'
import VideoRoutes from "./api/video/video.routes";


const app = express();
const port = config.port;
app.listen(port, () => {
  console.log(`🔥  🚀  Server run port ➡️  ${port} 😃  ✔️ `);
});

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use('/videos', VideoRoutes )