import db from "@/config/database"
import { IHighlightsHome } from "@/interfaces/highlights-home.interface"

class HighlightsHomeService {
    async getAllHighlightsHome(): Promise<IHighlightsHome[]> {
        return (await db.query("SELECT * FROM highlights_home")).rows
    }

    async getHighlightHomeById(id: string): Promise<IHighlightsHome> {
        return (await db.query(`SELECT * FROM highlights_home WHERE id = ${id}`)).rows[0]
    }

    async createHighlightHome(dto: IHighlightsHome) {
        try {
            return (await db.query(`
            INSERT INTO highlights_home (icon, title, link)
            VALUES ('${dto.icon}', '${dto.title}', '${dto.link}')
            RETURNING id
            `)).rows[0]
        } catch (error) {
            console.error(error)
        }
    }
    async updateHighlightHome(id: string, dto: IHighlightsHome) {
        return (await db.query(`
            UPDATE highlights_home 
            SET icon = '${dto.icon}', title = '${dto.title}', link = '${dto.link}'
            WHERE id = ${id}
            RETURNING *
        `)).rows[0]
    }
    async deleteHighlightHome(id: string) {
        return (await db.query(`DELETE FROM highlights_home WHERE id = ${id} RETUNING *`)).rows[0]
    }

    async getLastAdded(){
        try{
            return (await db.query(`SELECT  * FROM highlights_home ORDER BY id DESC LIMIT 1`)).rows[0] || {id: "0"}
        } catch(e) {
            return {id: "0"}
        }
    }
}

export default new HighlightsHomeService()