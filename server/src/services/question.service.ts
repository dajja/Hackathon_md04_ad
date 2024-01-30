import { db } from "../config/db.config";

export const oneQuestion = async (id: number) => {
    try {
        let [result]: any = await db.execute("select * from question where question_id = ?", [id])
        return result[0]
    } catch (err) {
        console.log(err)
    }
}
export const allQuestions = async () => {
    try {
        let [result]: any = await db.execute("select * from question")
        return result
    } catch (err) {
        console.log(err)
    }
}
export const questionWithAnswer = async (id: number) => {
    try {
        let [result]: any = await db.execute("select * from question join answer on question.question_id = answer.question_id where question.question_id = ?", [id]);
        return result
    } catch (err) {
        console.log(err)
    }
}
export const filterQuestion = async (id: number,level: number, limit: number) => {
    try {
        let [result]: any = await db.execute(`select * from question where category_id = ? and level = ? limit ${limit}`, [id,level]);
        return result
    } catch (err) {
        console.log(err);
    }
}
export const newQuestion = async (id: number, cateId: number, content: string, level: number) => {
    try {
        let [result]: any = await  db.execute("insert into question (question_id,category_id,createdAt,content,level) values (?,?,CURRENT_DATE(),?,?)",[id,cateId,content,level])
        return result.insertId  
    } catch (err) {
        console.log(err)
    }
}