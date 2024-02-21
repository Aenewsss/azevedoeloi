import { Pool } from "pg"

const db = new Pool({
    host: process.env.NEXT_PUBLIC_DB_URL,
    port: Number(process.env.NEXT_PUBLIC_DB_PORT),
    user: process.env.NEXT_PUBLIC_DB_USER,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    database: process.env.NEXT_PUBLIC_DB_NAME
})

export default db