import db from "@/config/database"
import { IBlog } from "@/interfaces/blog.interface"

class BlogApiService {
    async getAllBlogs(): Promise<IBlog[]> {
        return (await db.query("SELECT * FROM blog")).rows
    }

    async getBlogById(id: string): Promise<IBlog> {
        return (await db.query(`SELECT * FROM blog WHERE id = ${id}`)).rows[0]
    }

    async createBlog(dto: IBlog) {
        try {
            return (await db.query(`
            INSERT INTO blog (text,title,url_path)
            VALUES ('${dto.text}', '${dto.title}', '${dto.url_path}')
            RETURNING id
            `)).rows[0]
        } catch (error) {
            console.error(error)
        }
    }
    async updateBlog(id: string, dto: IBlog) {
        return (await db.query(`
            UPDATE blog 
            SET text = '${dto.text}', title = '${dto.title}', url_path = '${dto.url_path}'
            WHERE id = ${id}
            RETURNING *
        `)).rows[0]
    }
    async deleteBlog(id: string) {
        return (await db.query(`DELETE FROM blog WHERE id = ${id} RETUNING *`)).rows[0]
    }
}

export default new BlogApiService()