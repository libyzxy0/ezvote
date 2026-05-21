import express, { Application } from "express";
import Bootstrap from "@/bootstrap";
import errorHandler from "@/middlewares/error";
import notFound from "@/middlewares/not-found";
import { initializeRoutes } from "@/routes/index.routes";
import cookieParser from "cookie-parser";
import cors from "cors";

const app: Application = express();

app.use(errorHandler);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const allowedOrigins = [
  "http://localhost:5173"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

Bootstrap(app);
initializeRoutes(app);

app.get('/', (_req, res) => {
  res.json({ message: 'Hello, server is currently working!' });
})

app.use(notFound);