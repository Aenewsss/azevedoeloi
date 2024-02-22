import db from "@/config/database";
import { IUser } from "@/interfaces/user.interface";

class UserServiceApi {
    async getUserByEmail(email: string): Promise<IUser> {
        try {
            return (await db.query(`
            SELECT * FROM users WHERE email = '${email}'
            `)).rows[0]
        } catch (error: any) {
            console.error(error.message)
        }
    }

    async createUser(email: string, password: string): Promise<IUser> {
        return (await db.query(`
            INSERT INTO users (email, password) VALUES ('${email}','${password}')
            RETURNING *
        `)).rows[0]
    }
}

export default new UserServiceApi()