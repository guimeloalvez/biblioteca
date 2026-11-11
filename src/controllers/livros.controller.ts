import { type Request, type Response } from "express"
import type { CreateLivro } from "../types/livros.js"
import { livroService } from "../services/livros.service.js"

class LivroController {
    async create(req: Request<CreateLivro>, res: Response) {
        try {
            const carro = await livroService.create(req.body)
            return res.json(carro)
        } catch (error) {
            console.error(error);
            return res.json({ message: "Erro interno do servidor" })
        }

    }
    async getAll(req: Request, res: Response) {
        try {
            const livros = await livroService.getAll()
            return res.json(livros)
        } catch (error) {
            console.error(error);
            return res.json({ message: "Erro interno do servidor" })
        }

    }
    async getById(req: Request<{ id: string }>, res: Response) {
        try {
            const livro = await livroService.getById(req.params.id)
            return res.json(livro)
        } catch (error) {
            console.error(error);
            return res.json({ message: "Erro interno do servidor" })
        }

    }
    async update(req: Request<{ id: string }, CreateLivro>, res: Response) {
        try {
            const livroAtualizado = await livroService.update(req.params.id, req.body)
            return res.json(livroAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({ message: "Erro interno do servidor" })
        }

    }
    async delete(req: Request<{ id: string }>, res: Response) {
        try {
            const livroDeletado = await livroService.delete(req.params.id)
            return res.json(livroDeletado)
        } catch (error) {
            console.error(error);
            return res.json({ message: "Erro interno do servidor" })
        }

    }
}


export const livroController = new LivroController()