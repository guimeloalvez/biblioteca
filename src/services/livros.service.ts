import { livroRepository } from "../repositories/livros.repository.js";
import type { CreateLivro } from "../types/livros.js";

class LivroService {
  async create(livro: CreateLivro) {
    return await livroRepository.create(livro);
  }
  async getAll() {
    return await livroRepository.getAll();
  }
  async getById(id: string) {
    return await livroRepository.getById(id);
  }
  async update(id: string, dados: CreateLivro) {
    return await livroRepository.update(id, dados);
  }
  async delete(id: string) {
    return await livroRepository.delete(id);
  }
}

export const livroService = new LivroService();
