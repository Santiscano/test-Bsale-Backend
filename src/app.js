import express from 'express';
import morgan from 'morgan';

// Routes
import productsRoutes from "./routes/products.routes";

const app = express();

// setting
app.set("port", 8081);

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", productsRoutes);


export default app;