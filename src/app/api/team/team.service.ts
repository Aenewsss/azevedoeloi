import db from "@/config/database"
import { ITeam } from "@/interfaces/team.interface"

class TeamApiService {
    async getAllTeams(): Promise<ITeam[]> {
        return (await db.query("SELECT * FROM team ORDER BY id")).rows
    }

    async getTeamById(id: string): Promise<ITeam> {
        return (await db.query(`SELECT * FROM team WHERE id = ${id}`)).rows[0]
    }

    async createTeam(dto: ITeam) {
        try {
            return (await db.query(`
            INSERT INTO team (email,image,info,name,text)
            VALUES ('${dto.email}', '${dto.image}', '${dto.info}', '${dto.name}', '${dto.text}')
            RETURNING id
            `)).rows[0]
        } catch (error) {
            console.error(error)
        }
    }
    async updateTeam(id: string, dto: ITeam) {
        return (await db.query(`
            UPDATE team 
            SET email = '${dto.email}', image = '${dto.image}', info = '${dto.info}', name = '${dto.name}', text = '${dto.text}'
            WHERE id = ${id}
            RETURNING *
        `)).rows[0]
    }
    async deleteTeam(id: string) {
        return (await db.query(`DELETE FROM team WHERE id = ${id} RETURNING *`)).rows[0]
    }

    async getLastTeamAdded(): Promise<{id:string}>{
        try{
            return (await db.query(`SELECT  * FROM team ORDER BY id DESC LIMIT 1`)).rows[0] || {id: "0"}
        } catch(e) {
            return {id: "0"}
        }
    }
}

export default new TeamApiService()