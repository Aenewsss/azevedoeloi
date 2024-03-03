import db from "@/config/database"
import { IBanner } from "@/interfaces/banner.interface"

class BannerApiService {
    async getAllBanners(): Promise<IBanner[]> {
        return (await db.query("SELECT * FROM banners")).rows
    }

    async getBannerById(id: string): Promise<IBanner> {
        return (await db.query(`SELECT * FROM banners WHERE id = ${id}`)).rows[0]
    }

    async createBanner(dto: IBanner) {
        try {
            return (await db.query(`
            INSERT INTO banners (large_image, small_image, link)
            VALUES ('${dto.large_image}', '${dto.small_image}', '${dto.link}')
            RETURNING id
            `)).rows[0]
        } catch (error) {
            console.error(error)
        }
    }
    async updateBanner(id: string, dto: IBanner) {
        return (await db.query(`
            UPDATE banners 
            SET large_image = '${dto.large_image}', small_image = '${dto.small_image}', link = '${dto.link}'
            WHERE id = ${id}
            RETURNING *
        `)).rows[0]
    }
    async deleteBanner(id: string) {
        return (await db.query(`DELETE FROM banners WHERE id = ${id} RETURNING *`)).rows[0]
    }

    async getLastBannerAdded(): Promise<{id:string}>{
        try{
            return (await db.query(`SELECT  * FROM banners ORDER BY id DESC LIMIT 1`)).rows[0] || {id: "0"}
        } catch(e) {
            return {id: "0"}
        }
    }
}

export default new BannerApiService()