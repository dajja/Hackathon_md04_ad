import { Express } from "express";

import cateRouter from "./category.routes";
import questionRouter from "./question.routes";
const rootRouter = (app: Express) => {
    cateRouter(app);
    questionRouter(app);
}
export default rootRouter