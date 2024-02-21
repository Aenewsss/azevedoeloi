import db from "@/config/database"
import { IAboutHome } from "@/interfaces/about-home.interface"

class AboutHomeApiService {
    async getAboutHome(): Promise<IAboutHome> {
        return (await db.query("SELECT * FROM about_home")).rows[0]
    }

    async updateAboutHome(dto: IAboutHome): Promise<IAboutHome> {
        return (await db.query(`
            UPDATE about_home 
            SET button_text = '${dto.button_text}', text = '${dto.text}', title = '${dto.title}'
            WHERE id = 1
            RETURNING *
        `)).rows[0]
    }
}

export default new AboutHomeApiService()