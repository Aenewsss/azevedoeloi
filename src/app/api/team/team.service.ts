import db from "@/config/database"
import { ITeam } from "@/interfaces/team.interface"

class TeamApiService {
    async getAllTeams(): Promise<ITeam[]> {
        return (await db.query("SELECT * FROM team")).rows
    }

    async getTeamById(id: string): Promise<ITeam> {
        return (await db.query(`SELECT * FROM team WHERE id = ${id}`)).rows[0]
    }

    async createTeam(dto: ITeam) {
        try {
            return (await db.query(`
            INSERT INTO team (1)
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
        return (await db.query(`DELETE FROM team WHERE id = ${id} RETUNING *`)).rows[0]
    }
}

export default new TeamApiService()