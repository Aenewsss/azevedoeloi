import db from "@/config/database"
import { ITeamHome } from "@/interfaces/team-home.interface"

class TeamHomeApiService {
    async getTeamHome(): Promise<ITeamHome> {
        return (await db.query("SELECT * FROM team_home")).rows[0]
    }

    async updateTeamHome(dto: ITeamHome): Promise<ITeamHome> {
        return (await db.query(`
            UPDATE team_home 
            SET title = '${dto.title}'
            WHERE id = 1
            RETURNING *
        `)).rows[0]
    }
}

export default new TeamHomeApiService()