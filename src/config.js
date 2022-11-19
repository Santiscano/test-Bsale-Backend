import { config } from "dotenv";

config();

export default {
    port: process.env.PORT || 8081,
    host: process.env.HOST || "",
    user: process.env.USER || "",
    database: process.env.DATABASE || "",
    password: process.env.PASSWORD || ""
};