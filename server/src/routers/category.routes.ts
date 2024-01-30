import { Express } from 'express';
import { getOneCategory, getAllCategories, addNewCategory } from '../controllers/category.controller';
const cateRouter = (app: Express) => {
    app.get("/api/v1/categories", getAllCategories);
    app.get("/api/v1/categories/:id", getOneCategory);
    app.post("/ap1/v1/categories", addNewCategory);
}

export default cateRouter