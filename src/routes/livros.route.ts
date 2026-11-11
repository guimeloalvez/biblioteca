import { Router } from "express";
import { livroController } from "../controllers/livros.controller.js";

export const livroRouter = Router();

livroRouter.post("/", livroController.create);
livroRouter.get("/", livroController.getAll);
livroRouter.get("/:id", livroController.getById);
livroRouter.patch("/:id", livroController.update);
livroRouter.delete("/:id", livroController.delete);
