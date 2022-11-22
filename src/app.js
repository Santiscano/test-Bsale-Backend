import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config.js'

// Routes
import productsRoutes from "./routes/products.routes.js";

const app = express();

// setting
app.set("port", config.port);

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", productsRoutes);


export default app;