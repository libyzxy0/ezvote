import { Router } from "express";
//import { admin_auth } from "@/middlewares/admin.auth";
import AdminController from "@/controllers/admin.controller";

const router = Router();

router.post("/login", AdminController.login);

export default router;