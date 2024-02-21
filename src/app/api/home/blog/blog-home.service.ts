import db from "@/config/database"
import { IBlogHome } from "@/interfaces/blog-home.interface"

class BlogHomeApiService {
    async getBlogHome(): Promise<IBlogHome> {
        return (await db.query("SELECT * FROM blog_home")).rows[0]
    }

    async updateBlogHome(dto: IBlogHome): Promise<IBlogHome> {
        return (await db.query(`
            UPDATE blog_home 
            SET title = '${dto.title}', button_text = '${dto.button_text}'
            WHERE id = 1
            RETURNING *
        `)).rows[0]
    }
}

export default new BlogHomeApiService()