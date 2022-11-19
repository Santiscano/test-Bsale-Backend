import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config'

// Routes
import productsRoutes from "./routes/products.routes";

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