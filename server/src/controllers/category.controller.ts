import { Request, Response } from "express";
import { oneCategory, allCategories, newCategory } from "../services/category.service";

export const getOneCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        let result = await oneCategory(+id);
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
export const getAllCategories = async (req: Request, res: Response) => {
    try {
        let result = await allCategories();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
    }
}
export const addNewCategory = async (req: Request, res: Response) => {
    const { id, name } = req.body;
    try {
        await newCategory(+id,name);
        res.status(201).json({
            message: 'them moi thanh cong'
        })
    } catch (err) {
        console.log(err)
    }
}