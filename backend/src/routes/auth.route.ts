import { Router, Request, Response } from "express";

const authRouter = Router();

authRouter.get("/auth-me", (req: Request, res: Response) => {
    res.json({ message: "GET auth-me" });
});

authRouter.post("/login", (req: Request, res: Response) => {
    res.json({ message: "POST login" });
});

authRouter.post("/logout", (req: Request, res: Response) => {
    res.json({ message: "POST logout" });
});

export default authRouter;