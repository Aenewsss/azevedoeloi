import db from "@/config/database"
import { IPartner } from "@/interfaces/partner.interface"

class PartnerApiService {
    async getPartner(): Promise<IPartner> {
        return (await db.query("SELECT * FROM partner")).rows[0]
    }

    async updatePartner(dto: IPartner): Promise<IPartner> {
        return (await db.query(`
            UPDATE partner 
            SET page_title = '${dto.page_title}',page_description = '${dto.page_description}'
            WHERE id = 1
            RETURNING *
        `)).rows[0]
    }
}

export default new PartnerApiService()