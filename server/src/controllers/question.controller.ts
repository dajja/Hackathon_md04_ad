import { Request, Response } from "express";
import { oneQuestion, allQuestions, questionWithAnswer, filterQuestion, newQuestion } from "../services/question.service";

export const getOneQuestion = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        let result = await oneQuestion(+id);
        if (!result) {
            return res.status(400).json({
                message: 'khong ton tai'
            })
        }
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
    }
}
export const getAllQuestions = async (req: Request, res: Response) => {
    const category = req.query.category || "";
    const level = req.query.level || "";
    const limit = req.query.limit || "";
    try {
        if (category == "" && level == "" && limit == "") {
            let result = await allQuestions();
            return res.status(200).json(result);
        }
        let reso = await filterQuestion(+category, +level, +limit);
        res.status(200).json(reso);
    } catch (err) {
        console.log(err);
    }
}
export const quesWithAns = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        let result = await questionWithAnswer(+id);
        if (result.length <= 0) {
            return res.status(400).json({
                message: 'cau hoi khong ton tai'
            })
        }
        res.status(200).json(result);
    } catch (err) {
        console.log(err)
    }
}
export const addNewQuestion = async (req: Request, res: Response) => {
    const { id, cateId, content, level } = req.body;
    try {
        await newQuestion(+id, +cateId, content, +level);
        res.status(201).json({
            message: 'them moi thanh cong'
        })
    } catch (err) {
        console.log(err)
    }
}