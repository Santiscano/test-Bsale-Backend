import { config } from "dotenv";

config();

export default {
    port: process.env.PORT || 8081,
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
};