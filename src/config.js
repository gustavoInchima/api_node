import { config } from "dotenv";

config();

export default {
    host: proccess.env.HOST || "",
    database: proccess.env.DATABASE || "",
    user: proccess.env.USER || "",
    password: proccess.env.PASSWORD || ""
};