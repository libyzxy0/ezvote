import { Request, Response } from "express";

class AdminController {
  static async login(req: Request, res: Response) {
    res.json({ message: 'Login controller' })
  }
}

export default AdminController;