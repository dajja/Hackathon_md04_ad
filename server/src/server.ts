import express from 'express';
import cors from 'cors';
import 'dotenv/config'

import rootRouter from './routers/root.routes';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
rootRouter(app);
app.listen(process.env.GATE, () => {
    console.log("server is running");
})