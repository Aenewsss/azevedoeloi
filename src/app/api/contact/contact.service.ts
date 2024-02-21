import db from "@/config/database"
import { IContact } from "@/interfaces/contact.interface"

class ContactApiService {
    async getContact(): Promise<IContact> {
        return (await db.query("SELECT * FROM contact")).rows[0]
    }

    async updateContact(dto: IContact): Promise<IContact> {
        return (await db.query(`
            UPDATE contact 
            SET page_title = '${dto.page_title}',page_description = '${dto.page_description}',contact_info_text = '${dto.contact_info_text}'
            ,phone_mail_text = '${dto.phone_mail_text}',work_with_us_text = '${dto.work_with_us_text}'
            WHERE id = 1
            RETURNING *
        `)).rows[0]
    }
}

export default new ContactApiService()