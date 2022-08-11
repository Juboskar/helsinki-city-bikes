import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT as string;
export const MONGODB_URI = process.env.MONGODB_URI as string;
