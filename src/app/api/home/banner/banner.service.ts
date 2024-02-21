import db from "@/config/database"
import { IBanner } from "@/interfaces/banner.interface"

class BannerApiService {
    async getAllBanners(): Promise<IBanner[]> {
        return (await db.query("SELECT * FROM banners")).rows
    }

    async getBannerById(id: string) {
        return (await db.query(`SELECT * FROM banners WHERE id = ${id}`)).rows
    }
    
    async createBanner(dto: IBanner) {
        return (await db.query(`
            INSERT INTO banners (largeImage,smallImage, link)
            VALUES ('${dto.largeImage}', '${dto.smallImage}', '${dto.link}')
            RETURNING id
        `)).rows[0]
    }
    async updateBanner(id: string, dto: IBanner) {
        return await db.query(`
            UPDATE banners 
            SET largeImage = '${dto.largeImage}', smallImage = '${dto.smallImage}', link = '${dto.link}'
            WHERE id = ${id}
            RETURNING id
        `)
    }
    async deleteBanner(id: string) {
        return await db.query(`DELETE FROM banners WHERE id = ${id}`)
    }
}

export default new BannerApiService()