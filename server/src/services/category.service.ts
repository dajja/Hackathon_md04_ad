import { db } from "../config/db.config";

export const oneCategory = async (id: number) => {
    try {
        let [result]: any = await  db.execute("select * from category where category_id = ?", [id])
        return result[0]
    } catch (err) {
        console.log(err)
    }
}
export const allCategories = async () => {
    try {
        let [result]: any = await  db.execute("select * from category")
        return result
    } catch (err) {
        console.log(err)
    }
}
export const newCategory = async (id: number, name: string) => {
    try {
        let [result]: any = await  db.execute("insert into category (id,name) values (?,?)",[id,name])
        return result.insertId  
    } catch (err) {
        console.log(err)
    }
}