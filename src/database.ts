import { Client } from "pg";

export const client: Client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
})

export const startDatabase = async (): Promise<void> => {
  await client.connect()
  console.log("DB connected")
}