import dotenv from "dotenv"

dotenv.configDotenv()
export const isOwner = (id: string): boolean => id === process.env.TELEGRAM_OWNER_ID?.trim();