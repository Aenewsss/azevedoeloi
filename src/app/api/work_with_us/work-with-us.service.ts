import db from "@/config/database"
import { IWorkWithUs } from "@/interfaces/work-with-us.interface"

class WorkWithUsApiService {
    async getWorkWithUs(): Promise<IWorkWithUs> {
        return (await db.query("SELECT * FROM work_with_us")).rows[0]
    }

    async updateWorkWithUs(dto: IWorkWithUs): Promise<IWorkWithUs> {
        return (await db.query(`
            UPDATE work_with_us 
            SET page_title = '${dto.page_title}',page_description = '${dto.page_description}'
            WHERE id = 1
            RETURNING *
        `)).rows[0]
    }
}

export default new WorkWithUsApiService()