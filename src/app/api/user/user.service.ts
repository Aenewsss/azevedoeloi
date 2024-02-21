import db from "@/config/database";
import { IUser } from "@/interfaces/user.interface";

class UserServiceApi {
    async getUser(email: string): Promise<IUser> {
        try {
            return (await db.query(`
            SELECT * FROM users where email = ${email}
            `)).rows[0]
        } catch (error) {
            console.error(error)
            throw new Error('Failed to fetch user.');
        }
    }
}

export default new UserServiceApi()