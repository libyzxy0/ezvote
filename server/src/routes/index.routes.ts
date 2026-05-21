import { Router, Application } from "express";
import adminRoutes from "./admin.routes";
import { API_VERSION } from "@/utils/version";

const router = Router();

router.use("/admin", adminRoutes);

export const initializeRoutes = (app: Application) => {
  app.use(API_VERSION, router);
};