import { Express } from 'express';
import { getAllQuestions, getOneQuestion, quesWithAns, addNewQuestion } from '../controllers/question.controller';
const questionRouter = (app: Express) => {
    app.get("/api/v1/questions", getAllQuestions);
    app.get("/api/v1/questions/:id", getOneQuestion);
    app.get("/api/v1/questions/:id/answers", quesWithAns);
    app.post("/api/v1/questions", addNewQuestion)
}
export default questionRouter;